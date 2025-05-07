import logger from "lib/consola"
import { getLocationsList } from "./getLocationsList";

export const getJobsList = async () => {
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
        fields: ["Tiêu đề", "Giới thiệu", "Khu vực", "Slug"],
        view: "Grid view",
        filterByFormula: `FIND("Approved", {Status})`
      }),
    },
  ).then((res) => res.json());

  let locations: string[] = [];
  const { offset, records } = response;
  if (Array.isArray(records) && records.length > 0) {
    for (const record of records) {
      locations = [...locations, ...record['fields']['Khu vực']]
    }
  }
  const locationsFilter = `OR(${locations.map(item => `RECORD_ID()="${item}"`).join(',')})`;
  const locationsMapper = await getLocationsList(locationsFilter);

  const data = records.map(({ fields, id }: any) => ({
    title: fields["Tiêu đề"],
    summary: fields["Giới thiệu"],
    slug: `${fields["Slug"]}-${id}`,
    locations: locationsMapper[fields["Khu vực"][0]]
  }));

  return {
    offset,
    data,
  };
};
