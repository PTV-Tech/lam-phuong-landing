import ClientView from "./components/ClientView";
import { getJobsList } from "@/app/jobs-search/data/getJobsList";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { offset, data } = await getJobsList();

  return <ClientView data={data} filterByFormula={""} offset={offset} />;
}
