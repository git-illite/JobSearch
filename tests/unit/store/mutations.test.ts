import mutations from "@/store/mutations";
import { createState, createJob, createDegree } from "./utils";

describe("mutations", () => {
  describe("LOGIN_USER", () => {
    it("logs the user in", () => {
      const startingState = createState({ isLoggedIn: false });
      mutations.LOGIN_USER(startingState);
      expect(startingState.isLoggedIn).toBe(true);
    });
    it("logs out user", () => {
      const startingState = createState({ isLoggedIn: true });
      mutations.LOGOUT_USER(startingState);
      expect(startingState.isLoggedIn).toBe(false);
    });
  });

  describe("RECEIVE_JOBS", () => {
    it("receive jobs from API response", () => {
      const state = createState({ jobs: [] });
      const job1 = createJob();
      const job2 = createJob();
      mutations.RECEIVE_JOBS(state, [job1, job2]);
      expect(state.jobs).toEqual([job1, job2]);
    });
  });

  describe("RECEIVE_DEGREES", () => {
    it("receive degrees from API response", () => {
      const state = createState({ degrees: [] });
      const degree1 = createDegree();
      mutations.RECEIVE_DEGREES(state, [degree1]);
      expect(state.degrees).toEqual([degree1]);
    });
  });

  describe("ADD_SELECTED_ORGANIZATIONS", () => {
    it("updates organizations that the user has chosen to filter by", () => {
      const state = createState({ selectedOrganizations: [] });
      mutations.ADD_SELECTED_ORGANIZATIONS(state, ["Org1", "Org2"]);
      expect(state.selectedOrganizations).toEqual(["Org1", "Org2"]);
    });
  });

  describe("ADD_SELECTED_JOB_TYPES", () => {
    it("updates job types that the user has chosen to filter by", () => {
      const state = createState({ selectedJobTypes: [] });
      mutations.ADD_SELECTED_JOB_TYPES(state, ["Full-time", "Part-time"]);
      expect(state.selectedJobTypes).toEqual(["Full-time", "Part-time"]);
    });
  });
  describe("ADD_SELECTED_DEGREES", () => {
    it("updates degrees that the user has chosen to filter by", () => {
      const state = createState({ selectedDegrees: [] });
      mutations.ADD_SELECTED_DEGREES(state, ["Bachelor's", "Master's"]);
      expect(state.selectedDegrees).toEqual(["Bachelor's", "Master's"]);
    });
  });

  describe("CLEAR_USER_JOB_FILTER_SELECTIONS ", () => {
    it("removes all job filters that user has selected", () => {
      const state = createState({
        selectedDegrees: ["Random Degree"],
        selectedJobTypes: ["Random job type"],
        selectedOrganizations: ["Random organization"],
      });
      mutations.CLEAR_USER_JOB_FILTER_SELECTIONS(state);
      expect(state.selectedDegrees).toEqual([]);
      expect(state.selectedJobTypes).toEqual([]);
      expect(state.selectedOrganizations).toEqual([]);
    });
  });

  describe("UPDATE_SKILLS_SEARCH_TERM ", () => {
    it("receives search term for skill use has", () => {
      const state = createState({
        skillsSearchTerm: "",
      });
      mutations.UPDATE_SKILLS_SEARCH_TERM(state, "Vue");
      expect(state.skillsSearchTerm).toBe("Vue");
    });
  });
});
