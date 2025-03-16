import ClientView from "./ClientView";

const PAGE_SIZE = 3;
const fields =
  "fields%5B%5D=Ti%C3%AAu+%C4%91%E1%BB%81&fields%5B%5D=M%C3%B4+t%E1%BA%A3+c%C3%B4ng+vi%E1%BB%87c&fields%5B%5D=Khu+v%E1%BB%B1c&fields%5B%5D=Slug";

export default async function Page() {
  const url = `https://api.airtable.com/v0/${process.env.BASE_ID}/${process.env.JOBS_TABLE}?pageSize=${PAGE_SIZE}&${fields}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    },
    next: { revalidate: 0 },
  }).then((res) => res.json());
  let jobs = response.records.map(
    ({ fields, id }: { fields: { [key: string]: any }; id: string }) => ({
      title: fields["Tiêu đề"],
      summary: fields["Mô tả công việc"],
      location: fields["Khu vực"],
      slug: `${fields["Slug"]}-${id}`,
    }),
  );

  const filterFormula = `OR(${jobs
    .map(
      ({ location }: { location: string[] }) => `RECORD_ID()="${location[0]}"`,
    )
    .join(",")})`;
  const encodedFormula = encodeURIComponent(filterFormula);
  const urlLocation = `https://api.airtable.com/v0/${process.env.BASE_ID}/${process.env.LOCATIONS_TABLE}?filterByFormula=${encodedFormula}`;
  const responseLocation = await fetch(urlLocation, {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    },
    next: { revalidate: 0 },
  }).then((res) => res.json());
  const locationMap: { [key: string]: any } = {};
  responseLocation.records.forEach((record: any) => {
    locationMap[record.id] = record.fields;
  });
  jobs = jobs.map((item: any) => ({
    ...item,
    location: locationMap[item.location[0]]["Name"],
  }));

  return <ClientView data={jobs} offset={response.offset} />;
}
