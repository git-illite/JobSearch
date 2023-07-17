import axios from "axios";

import { Job } from "./types";

const getJobs = async () => {
  const baseUrl = process.env.VUE_APP_BACKEND_URL;
  const response = await axios.get<Job[]>(`${baseUrl}/jobs`);
  return response.data;
};
export default getJobs;
