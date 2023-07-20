import { GlobalState } from "@/store/types";
import { Degree, Job } from "@/api/types";
import state from "@/store/state";

export const createState = (config: Partial<GlobalState> = {}): GlobalState => {
  const initialState = state();
  return { ...initialState, ...config };
};

export const createJob = (config: Partial<Job> = {}): Job => ({
  id: 1,
  title: "Angular Developer",
  organization: "Vue and Me",
  degree: "Master's",
  jobType: "Intern",
  locations: ["Lisbon"],
  minimumQualifications: [],
  preferredQualifications: [],
  description: [],
  dateAdded: "2021-07-04",
  ...config,
});

export const createDegree = (config: Partial<Degree> = {}): Degree => ({
  id: 1,
  degree: "Bachelor's",
  ...config,
});
