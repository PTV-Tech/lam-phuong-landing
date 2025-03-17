import { database } from "@/app/database";

export async function GET() {
  try {
    const response = await database(process.env.JOB_TYPES_TABLE || "")
      .select({
        fields: ["Name"],
        filterByFormula: "{Status}='Active'",
      })
      .firstPage();
    const data = response.map((item) => ({
      name: item.fields["Name"],
      id: item.fields["Name"],
    }));
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log("=>(route.ts:20) error", error);
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}
