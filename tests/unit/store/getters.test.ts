import getters from "@/store/getters";
import { createState, createJob, createDegree } from "./utils";

describe("getters", () => {
  describe("UNIQUE_ORGANIZATIONS", () => {
    it("finds unique organizations from a list of jobs", async () => {
      const jobs = [
        createJob({ organization: "Google" }),
        createJob({ organization: "Amazon" }),
        createJob({ organization: "Google" }),
      ];
      const state = createState({ jobs });
      const result = getters.UNIQUE_ORGANIZATIONS(state);
      expect(result).toEqual(new Set(["Google", "Amazon"]));
    });
  });

  describe("UNIQUE_JOB_TYPES", () => {
    it("finds unique job types from a list of jobs", () => {
      const jobs = [
        createJob({ jobType: "Full-time" }),
        createJob({ jobType: "Part-time" }),
        createJob({ jobType: "Full-time" }),
      ];
      const state = createState({ jobs });
      const result = getters.UNIQUE_JOB_TYPES(state);
      expect(result).toEqual(new Set(["Full-time", "Part-time"]));
    });
  });

  describe("UNIQUE_DEGREES", () => {
    it("finds unique degree values", () => {
      const degrees = [
        createDegree({ degree: "Master's" }),
        createDegree({ degree: "Bachelor's" }),
      ];
      const state = createState({ degrees });
      const result = getters.UNIQUE_DEGREES(state);
      expect(result).toEqual(["Master's", "Bachelor's"]);
    });
  });

  describe("INCLUDE_JOB_BY_ORGANIZATION", () => {
    describe("when the user has not selected any organizations", () => {
      it("includes job", () => {
        const state = createState({
          selectedOrganizations: [],
        });
        const job = createJob({ organization: "Google" });
        const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);
        expect(includeJob).toBe(true);
      });
    });
    it("identifies if job is associated with given organization", () => {
      const state = createState({
        selectedOrganizations: ["Google", "Microsoft"],
      });
      const job = createJob({ organization: "Google" });
      const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job);
      expect(includeJob).toBe(true);
    });
  });
  describe("INCLUDE_JOB_BY_JOB_TYPE", () => {
    describe("when the user has not selected any jobs", () => {
      it("includes job", () => {
        const state = createState({
          selectedJobTypes: [],
        });
        const job = createJob({ jobType: "full-time" });
        const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);
        expect(includeJob).toBe(true);
      });
    });
    it("identifies if job is associated with given job type", () => {
      const state = createState({
        selectedJobTypes: ["full-time", "intern"],
      });
      const job = createJob({ jobType: "intern" });
      const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job);
      expect(includeJob).toBe(true);
    });
  });

  describe("INCLUDE_JOB_BY_DEGREE", () => {
    describe("when the user has not selected any degrees", () => {
      it("includes degree", () => {
        const state = createState({
          selectedDegrees: [],
        });
        const job = createJob({ degree: "PHD" });
        const includeJob = getters.INCLUDE_JOB_BY_DEGREES(state)(job);
        expect(includeJob).toBe(true);
      });
    });
    it("identifies if degree is associated with given job", () => {
      const state = createState({
        selectedDegrees: ["Associates", "Ph.D"],
      });
      const job = createJob({ degree: "Ph.D" });
      const includeJob = getters.INCLUDE_JOB_BY_DEGREES(state)(job);
      expect(includeJob).toBe(true);
    });
  });

  describe("INCLUDE_JOB_BY_SKILL", () => {
    it("identifies if job matches user's skill ", () => {
      const state = createState({
        skillsSearchTerm: "Vue",
      });
      const job = createJob({ title: "Vue developer" });
      const includeJob = getters.INCLUDE_JOB_BY_SKILL(state)(job);
      expect(includeJob).toBe(true);
    });
    it("handles inconsistent character casing", () => {
      const state = createState({
        skillsSearchTerm: "vuE",
      });
      const job = createJob({ title: "Vue developer" });
      const includeJob = getters.INCLUDE_JOB_BY_SKILL(state)(job);
      expect(includeJob).toBe(true);
    });

    describe("when the user has not entered any skill", () => {
      it("includes job", () => {
        const state = createState({ skillsSearchTerm: "" });
        const job = createJob({ title: "Vue developer" });
        const includeJob = getters.INCLUDE_JOB_BY_SKILL(state)(job);
        expect(includeJob).toBe(true);
      });
    });
  });

  describe("FILTERED_JOBS", () => {
    it("filters jobs by organizations,job type, degrees and skills", () => {
      const INCLUDE_JOB_BY_ORGANIZATION = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_JOB_TYPE = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_DEGREES = jest.fn().mockReturnValue(true);
      const INCLUDE_JOB_BY_SKILL = jest.fn().mockReturnValue(true);
      const mockGetters = {
        INCLUDE_JOB_BY_JOB_TYPE,
        INCLUDE_JOB_BY_ORGANIZATION,
        INCLUDE_JOB_BY_DEGREES,
        INCLUDE_JOB_BY_SKILL,
      };
      const job = createJob({
        id: 1,
        title: "Best job ever",
        degree: "Master's",
      });
      const state = createState({
        jobs: [job],
      });
      const result = getters.FILTERED_JOBS(state, mockGetters);
      expect(result).toEqual([job]);
      expect(INCLUDE_JOB_BY_ORGANIZATION).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOB_BY_JOB_TYPE).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOB_BY_DEGREES).toHaveBeenCalledWith(job);
      expect(INCLUDE_JOB_BY_SKILL).toHaveBeenCalledWith(job);
    });
  });
});
