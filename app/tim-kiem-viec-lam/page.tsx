import ClientView from "./components/ClientView";
import { GetRecordsResponse, JobFields, LocationFields } from "@/type";
import config from "@/lib/config";

const BASE_URL = `https://api.airtable.com/v0/${process.env.BASE_ID}`;
const PAGE_SIZE = 5;
const fields =
  "fields%5B%5D=Ti%C3%AAu+%C4%91%E1%BB%81&fields%5B%5D=M%C3%B4+t%E1%BA%A3+c%C3%B4ng+vi%E1%BB%87c&fields%5B%5D=Khu+v%E1%BB%B1c&fields%5B%5D=Slug";

async function getJobsList() {
  try {
    const path = `${config.airtable.baseUrl}/${config.airtable.baseId}/${config.airtable.tables.jobs}/listRecords`;
    const response = await fetch(path, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.airtable.apiKey}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 },
      body: JSON.stringify({
        pageSize: PAGE_SIZE,
        fields: ["Tiêu đề", "Khu vực", "Slug", "Tóm tắt"],
      }),
    }).then((res) => res.json());
    console.log("=> ", response);
  } catch {
    return { records: [], offset: "" };
  }
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const response = await getJobsList();

  return <>Test</>;
}
