import { logger } from "@/lib/consola";
import axios from "@/lib/axios";

export const getJobTypesList = async (): Promise<
  { name: string; id: string }[]
> => {
  try {
    const response =
      await axios.get<{ name: string; id: string }[]>("/api/job-types");
    return response.data;
  } catch (error) {
    logger.error("Error get job types list: ", error);
    return [];
  }
};
