import useSWR from "swr";
import {getJobTypesList} from "@/app/jobs-search/data/getJobTypesList";

export default function FilterByJobTypes() {
    const {data, isLoading} = useSWR("/api/job-types", getJobTypesList)
    return <></>
}