import axios from "@/lib/axios";
import { COLUMN_NAMES_OF_JOB_TYPES_TABLE } from "@/app/jobs-search/constants";

export async function GET() {
  try {
    const response = await axios.post(
      `/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_JOB_TYPES_TABLE}/listRecords`,
      {
        pageSize: 50,
        fields: [
          COLUMN_NAMES_OF_JOB_TYPES_TABLE.TITLE,
          COLUMN_NAMES_OF_JOB_TYPES_TABLE.SLUG,
        ],
        view: "Grid view",
        filterByFormula: `FIND("Active", {Status})`,
      },
    );
    const data = response.data.records.map((item: any) => ({
      name: item.fields[COLUMN_NAMES_OF_JOB_TYPES_TABLE.TITLE],
      id: item.id,
    }));
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}
