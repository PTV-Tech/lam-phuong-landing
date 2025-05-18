import { COLUMN_NAMES_OF_JOBS_TABLE } from "@/app/jobs-search/constants";
import { logger } from "@/lib/consola";
import axios from "@/lib/axios";

export type Post = {
  title: string;
  summary: string;
  slug: string;
  locations: string;
};

export const getJobsList = async (): Promise<{
  offset: string;
  data: Post[];
}> => {
  try {
    const response = await axios.post<{ offset: string; records: any[] }>(
      `/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_JOBS_TABLE}/listRecords`,
      {
        pageSize: 5,
        fields: [
          COLUMN_NAMES_OF_JOBS_TABLE.TITLE,
          COLUMN_NAMES_OF_JOBS_TABLE.INTRODUCE,
          COLUMN_NAMES_OF_JOBS_TABLE.LOCATION,
          COLUMN_NAMES_OF_JOBS_TABLE.SLUG,
        ],
        view: "Grid view",
        filterByFormula: `FIND("Approved", {Status})`,
      },
    );

    const offset = response.data.offset ?? "";
    const records = response.data.records ?? [];
    const data: Post[] = records.map(({ fields, id }: any) => ({
      title: fields[COLUMN_NAMES_OF_JOBS_TABLE.TITLE],
      summary: fields[COLUMN_NAMES_OF_JOBS_TABLE.INTRODUCE],
      slug: `${fields[COLUMN_NAMES_OF_JOBS_TABLE.SLUG]}-${id}`,
      locations: fields[COLUMN_NAMES_OF_JOBS_TABLE.LOCATION].join(", "),
    }));
    return {
      offset,
      data,
    };
  } catch (error) {
    logger.error("Error get jobs list: ", error);
    return {
      offset: "",
      data: [],
    };
  }
};
