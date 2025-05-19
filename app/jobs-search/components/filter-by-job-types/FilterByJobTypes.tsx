import useSWR from "swr";
import { getJobTypesList } from "@/app/jobs-search/data/getJobTypesList";
import { CONFIG_BY_KEY, FilterKeyEnum } from "@/app/jobs-search/constants";
import BaseFilter from "../BaseFilter";

export default function FilterByJobTypes() {
  const { data, isLoading } = useSWR("/api/job-types", getJobTypesList);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <BaseFilter
      value={CONFIG_BY_KEY[FilterKeyEnum.JobTypes].key}
      data={data ?? []}
      title={CONFIG_BY_KEY[FilterKeyEnum.JobTypes].title}
      activeIDs={[]}
    />
  );
}
