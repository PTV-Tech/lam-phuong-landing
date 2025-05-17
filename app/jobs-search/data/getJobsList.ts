import { COLUMN_NAMES_OF_JOBS_TABLE } from "@/app/jobs-search/constants";

export type Post = {
  title: string;
  summary: string;
  slug: string;
  locations: string;
}

export const getJobsList = async (): Promise<{ offset: string, data: Post[] }> => {
  const response = await fetch(
    `${process.env.AIRTABLE_BASE_URL}/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_JOBS_TABLE}/listRecords`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      },
      body: JSON.stringify({
        pageSize: 5,
        fields: [
          COLUMN_NAMES_OF_JOBS_TABLE.TITLE,
          COLUMN_NAMES_OF_JOBS_TABLE.INTRODUCE,
          COLUMN_NAMES_OF_JOBS_TABLE.LOCATION,
          COLUMN_NAMES_OF_JOBS_TABLE.SLUG,
        ],
        view: "Grid view",
        filterByFormula: `FIND("Approved", {Status})`,
      }),
    },
  ).then((res) => res.json());


  const { offset, records } = response;
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
};
