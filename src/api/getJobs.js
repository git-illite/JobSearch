import axios from "axios";

const getJobs = async () => {
  const baseUrl = process.env.VUE_APP_BACKEND_URL;
  const response = await axios.get(`${baseUrl}/jobs`);
  return response.data;
};
export default getJobs;
