import ClientView from "./ClientView";
import { GetRecordsResponse, JobFields, LocationFields } from "@/type";

const BASE_URL = `https://api.airtable.com/v0/${process.env.BASE_ID}`;
const PAGE_SIZE = 3;
const fields =
  "fields%5B%5D=Ti%C3%AAu+%C4%91%E1%BB%81&fields%5B%5D=M%C3%B4+t%E1%BA%A3+c%C3%B4ng+vi%E1%BB%87c&fields%5B%5D=Khu+v%E1%BB%B1c&fields%5B%5D=Slug";

export default async function Page() {
  const url = `${BASE_URL}/${process.env.JOBS_TABLE}?pageSize=${PAGE_SIZE}&${fields}`;
  const response: GetRecordsResponse<JobFields> = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    },
    next: { revalidate: 0 },
  }).then((res) => res.json());

  const filterLocationFormula = `OR(${response.records
    .map(({ fields }) => `RECORD_ID()="${fields["Khu vực"][0]}"`)
    .join(",")})`;
  const encodedFormula = encodeURIComponent(filterLocationFormula);
  const urlLocation = `${BASE_URL}/${process.env.LOCATIONS_TABLE}?filterByFormula=${encodedFormula}`;
  const responseLocation: GetRecordsResponse<LocationFields> = await fetch(
    urlLocation,
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      },
      next: { revalidate: 0 },
    },
  ).then((res) => res.json());
  let locationMap: { [key: string]: string } = {};
  responseLocation.records.forEach((record: any) => {
    locationMap[record.id] = record.fields["Name"];
  });

  const data = response.records.map(({ fields, id }) => ({
    title: fields["Tiêu đề"],
    summary: fields["Mô tả công việc"],
    location: locationMap[fields["Khu vực"][0]],
    slug: `${fields["Slug"]}-${id}`,
  }));

  return <ClientView data={data} offset={response.offset} />;
}
