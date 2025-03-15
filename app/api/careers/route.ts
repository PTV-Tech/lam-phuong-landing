import Airtable from "airtable";

const base = new Airtable().base(process.env.AIRTABLE_BASE_ID || "");

const TITLE_ID = "fldqlj8n0JwsU9lU4";
const SUMMARY_ID = "fldRxxQsvWXa5CwQE";
const LOCATION_ID = "fldasxXhX4VvmCB2c";
const SLUG_ID = "fldEemb6XdbFKULeH";

export async function GET() {
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
      })
      .firstPage();
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
  } catch {
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}
