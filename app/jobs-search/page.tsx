import ClientView from "./components/ClientView";
import { GetRecordsResponse, JobFields, LocationFields } from "@/type";
import { Fragment } from "react";
import { getJobsList } from "@/app/jobs-search/data/getJobsList";
import logger from "lib/consola";

const BASE_URL = `https://api.airtable.com/v0/${process.env.BASE_ID}`;
const PAGE_SIZE = 5;
const fields =
  "fields%5B%5D=Ti%C3%AAu+%C4%91%E1%BB%81&fields%5B%5D=M%C3%B4+t%E1%BA%A3+c%C3%B4ng+vi%E1%BB%87c&fields%5B%5D=Khu+v%E1%BB%B1c&fields%5B%5D=Slug";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const response = await getJobsList();
  logger.withTag("JobsSearchPage").info(response);
  return <Fragment />
}
