import Airtable from "airtable";

const base = new Airtable().base(process.env.AIRTABLE_BASE_ID || "");

export async function GET() {
  try {
    const response = await base("Tuyển dụng")
      .select({
        maxRecords: 3,
        view: "Grid view",
      })
      .firstPage();
    const data = response
      .map((item) => ({
        title: item.fields["Title"],
        summary: item.fields["Summary"],
        id: item.fields["ID"],
        location: Array.isArray(item.fields["Locations"]) ? item.fields["Locations"][0] : "",
        slug: `${item.fields["Slug"]}-${item.id}`,
      }));
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
