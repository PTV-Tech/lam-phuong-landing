import ClientView from "./components/ClientView";
import { GetRecordsResponse, JobFields, LocationFields } from "@/type";

const BASE_URL = `https://api.airtable.com/v0/${process.env.BASE_ID}`;
const PAGE_SIZE = 3;
const fields =
  "fields%5B%5D=Ti%C3%AAu+%C4%91%E1%BB%81&fields%5B%5D=M%C3%B4+t%E1%BA%A3+c%C3%B4ng+vi%E1%BB%87c&fields%5B%5D=Khu+v%E1%BB%B1c&fields%5B%5D=Slug";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { job_types, job_categories, product_groups, locations } =
    await searchParams;
  const getSearchParams = () => {
    let jobTypesFormula: string[] = [];
    if (!!job_types) {
      const jobTypes = job_types.split("|");
      jobTypesFormula = jobTypes.map(
        (jobType) => `FIND("${jobType}", ARRAYJOIN({Loại công việc}, ","))`,
      );
    }
    let jobCategoriesFormula: string[] = [];
    if (!!job_categories) {
      const jobCategories = job_categories.split("|");
      jobCategoriesFormula = jobCategories.map(
        (jobCategory) =>
          `FIND("${jobCategory}", ARRAYJOIN({Danh mục công việc}, ","))`,
      );
    }
    let productGroupsFormula: string[] = [];
    if (!!product_groups) {
      const productGroups = product_groups.split("|");
      productGroupsFormula = productGroups.map(
        (productGroup) =>
          `FIND("${productGroup}", ARRAYJOIN({Nhóm sản phẩm}, ","))`,
      );
    }
    let locationsFormula: string[] = [];
    if (!!locations) {
      const _locations = locations.split("|");
      locationsFormula = _locations.map(
        (location) => `FIND("${location}", ARRAYJOIN({Khu vực}, ","))`,
      );
    }

    const formula = [
      ...jobTypesFormula,
      ...jobCategoriesFormula,
      ...productGroupsFormula,
      ...locationsFormula,
    ].filter((item) => !!item);
    if (formula.length > 0) {
      return `OR(${formula.join(", ")})`;
    }
    return "";
  };
  const url = `${BASE_URL}/${process.env.JOBS_TABLE}?pageSize=${PAGE_SIZE}&${fields}&filterByFormula=${encodeURIComponent(getSearchParams())}`;
  const response: GetRecordsResponse<JobFields> = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    },
    next: { revalidate: 0 },
  }).then((res) => res.json());

  const filterLocationFormula = `OR(${(response.records || [])
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

  const data = (response.records || []).map(({ fields, id }) => ({
    title: fields["Tiêu đề"],
    summary: fields["Mô tả công việc"],
    location: locationMap[fields["Khu vực"][0]],
    slug: `${fields["Slug"]}-${id}`,
  }));

  return (
    <ClientView
      data={data}
      offset={response.offset}
      filterByFormula={encodeURIComponent(getSearchParams())}
    />
  );
}
