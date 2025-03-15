import Airtable from "airtable";

const base = new Airtable().base(process.env.AIRTABLE_BASE_ID || "");

const TITLE_ID = "fldqlj8n0JwsU9lU4";
const SUMMARY_ID = "fldRxxQsvWXa5CwQE";
const LOCATION_ID = "fldasxXhX4VvmCB2c";
const SLUG_ID = "fldEemb6XdbFKULeH";

export async function GET() {
  try {
    const response = await base("tblCj27rNtPggMNC2")
      .select({
        maxRecords: 3,
        view: "Grid view",
        fields: [TITLE_ID, SUMMARY_ID, LOCATION_ID, SLUG_ID],
        returnFieldsByFieldId: true,
      })
      .firstPage();
    const data = response.map(({ fields, id }) => {
      return {
        title: fields[TITLE_ID],
        summary: fields[SUMMARY_ID],
        location: fields[LOCATION_ID],
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
