import Airtable from "airtable";
import { NextRequest } from "next/server";

const base = new Airtable().base(process.env.AIRTABLE_BASE_ID || "");

const TITLE_ID = "fldqlj8n0JwsU9lU4";
const SUMMARY_ID = "fldRxxQsvWXa5CwQE";
const LOCATION_ID = "fldasxXhX4VvmCB2c";
const SLUG_ID = "fldEemb6XdbFKULeH";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const jobTypes =
    searchParams
      .get("job_types")
      ?.split("|")
      .filter((item) => !!item) || [];
  let conditions: string[] = [];
  for (let jobType of jobTypes) {
    conditions = [
      ...conditions,
      `FIND("${jobType}", ARRAYJOIN({fld3cVb290jA6LH76}, ","))`,
    ];
  }
  const conditionsStr = `${conditions.join(",")}`;
  console.log("=>(route.ts:27) conditionsStr", conditionsStr);

  try {
    const locations = (await base("tblwmxQvccq7bcLu6")
      .select({
        view: "Grid view",
        fields: ["fldk5qKE5puLWOXOi", "fldzfZrUAMeGdQDNh"],
        filterByFormula: "{fldMG1ksisMbgqKHe}='Active'",
        returnFieldsByFieldId: true,
      })
      .firstPage()
      .then((data) =>
        data.reduce(
          (accumulator, currentValue) => ({
            ...accumulator,
            [currentValue.id]: currentValue.fields["fldk5qKE5puLWOXOi"],
          }),
          {},
        ),
      )) as { [key: string]: string };
    const response = await base("tblCj27rNtPggMNC2")
      .select({
        view: "Grid view",
        fields: [TITLE_ID, SUMMARY_ID, LOCATION_ID, SLUG_ID],
        returnFieldsByFieldId: true,
        filterByFormula: conditionsStr,
      })
      .firstPage();
    console.log("=>(route.ts:55) response", response);
    const data = response.map(({ fields, id }) => {
      return {
        title: fields[TITLE_ID],
        summary: fields[SUMMARY_ID],
        location: locations[fields[LOCATION_ID] as string] ?? "",
        slug: `${fields[SLUG_ID]}-${id}`,
      };
    });
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.log("=>(route.ts:70) e", e);
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}
