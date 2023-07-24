import { GlobalState } from "@/store/types";

const state = (): GlobalState => {
  return {
    isLoggedIn: false,
    jobs: [],
    degrees: [],
    selectedOrganizations: [],
    selectedJobTypes: [],
    selectedDegrees: [],
    skillsSearchTerm: "",
  };
};
export default state;
