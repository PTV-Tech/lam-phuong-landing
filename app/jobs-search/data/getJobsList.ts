import { COLUMN_NAMES_OF_JOBS_TABLE } from "@/app/jobs-search/constants";
import { logger } from "@/lib/consola";
import axios from "@/lib/axios";
import { GetJobPostingsListResponse, JobPostingListItem } from "@/type";

export const getJobsList = async (): Promise<{
  offset: string;
  data: JobPostingListItem[];
}> => {
  try {
    const response = await axios.post<GetJobPostingsListResponse>(
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
    const data: JobPostingListItem[] = records.map(({ fields, id }: any) => ({
      title: fields[COLUMN_NAMES_OF_JOBS_TABLE.TITLE],
      summary: fields[COLUMN_NAMES_OF_JOBS_TABLE.INTRODUCE],
      slug: fields[COLUMN_NAMES_OF_JOBS_TABLE.SLUG],
      locations: fields[COLUMN_NAMES_OF_JOBS_TABLE.LOCATION].join(", "),
      id,
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
