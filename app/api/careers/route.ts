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
      .map((item) => item.fields)
      .map((item) => ({
        title: item["Title"],
        summary: item["Summary"],
        id: item["ID"],
        location: Array.isArray(item["Locations"]) ? item["Locations"][0] : "",
        slug: item["Slug"],
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
