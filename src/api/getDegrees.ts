import axios from "axios";

import { Degree } from "./types";

const getDegrees = async () => {
  const baseUrl = process.env.VUE_APP_BACKEND_URL;
  const response = await axios.get<Degree[]>(`${baseUrl}/degrees`);
  return response.data;
};
export default getDegrees;
