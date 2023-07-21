import { Degree, Job } from "@/api/types";

export interface GlobalState {
  isLoggedIn: boolean;
  jobs: Job[];
  degrees: Degree[];
  selectedOrganizations: string[];
  selectedJobTypes: string[];
  selectedDegrees: string[];
}
