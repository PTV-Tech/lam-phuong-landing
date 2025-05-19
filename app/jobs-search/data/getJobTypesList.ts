import { logger } from "@/lib/consola";
import axios from "@/lib/axios";

export const getJobTypesList = async () => {
  try {
    const response = await axios.get("/api/job-types");
    logger.info("response", response);
    return [];
  } catch (error) {
    logger.error("Error get job types list: ", error);
    return [];
  }
};
