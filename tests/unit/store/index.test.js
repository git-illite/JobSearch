import { actions, getters, mutations, state } from "@/store";
import getJobs from "@/api/getJobs";

jest.mock("@/api/getJobs");

describe("state", () => {
  it("keeps track of whether user is logged in", () => {
    const startingState = state();
    expect(startingState.isLoggedIn).toBe(false);
  });

  it("stores job listings", () => {
    const startingState = state();
    expect(startingState.jobs).toEqual([]);
  });

  it("stores organizations that the user has selected", () => {
    const startingState = state();
    expect(startingState.selectedOrganizations).toEqual([]);
  });
});

describe("mutations", () => {
  describe("LOGIN_USER", () => {
    it("logs the user in", () => {
      const state = { isLoggedIn: false };
      mutations.LOGIN_USER(state);
      expect(state).toEqual({ isLoggedIn: true });
    });
  });

  describe("RECEIVE_JOBS", () => {
    it("receive jobs from API response", () => {
      const state = { jobs: [] };
      mutations.RECEIVE_JOBS(state, ["Job 1", "Job 2"]);
      expect(state).toEqual({ jobs: ["Job 1", "Job 2"] });
    });
  });

  describe("ADD_SELECTED_ORGANIZATIONS", () => {
    it("updates organizations that has chosen to filter by", () => {
      const state = { selectedOrganizations: [] };
      mutations.ADD_SELECTED_ORGANIZATIONS(state, ["Org1", "Org2"]);
      expect(state).toEqual({ selectedOrganizations: ["Org1", "Org2"] });
    });
  });

  describe("getters", () => {
    describe("UNIQUE_ORGANIZATIONS", () => {
      it("finds unique organizations from a list of jobs", async () => {
        const state = {
          jobs: [
            { organization: "Google" },
            { organization: "Amazon" },
            { organization: "Google" },
          ],
        };
        const result = getters.UNIQUE_ORGANIZATIONS(state);
        expect(result).toEqual(new Set(["Google", "Amazon"]));
      });

      describe("when the user has not selected any organizations", () => {
        it("it should return all jobs", () => {
          const state = {
            jobs: [
              { organization: "Google" },
              { organization: "Amazon" },
              { organization: "Microsoft" },
            ],
            selectedOrganizations: [],
          };
          const filteredJobs = getters.FILTERED_JOBS_BY_ORGANIZATIONS(state);
          expect(filteredJobs).toEqual([
            { organization: "Google" },
            { organization: "Amazon" },
            { organization: "Microsoft" },
          ]);
        });
      });
    });

    describe("FILTERED_JOBS_BY_ORGANIZATIONS", () => {
      it("identifies jobs that are associated with given organizations", () => {
        const state = {
          jobs: [
            { organization: "Google" },
            { organization: "Amazon" },
            { organization: "Microsoft" },
          ],
          selectedOrganizations: ["Google", "Microsoft"],
        };
        const filteredJobs = getters.FILTERED_JOBS_BY_ORGANIZATIONS(state);
        expect(filteredJobs).toEqual([
          { organization: "Google" },
          { organization: "Microsoft" },
        ]);
      });
    });
  });

  describe("actions", () => {
    describe("FETCH_JOBS", () => {
      beforeEach(() => {
        getJobs.mockResolvedValue([
          {
            id: 1,
            title: "Software developer",
          },
        ]);
      });
      it("makes request to fetch jobs", async () => {
        const context = { commit: jest.fn() };
        await actions.FETCH_JOBS(context);
        expect(getJobs).toHaveBeenCalled();
      });
      it("sends message to save received jobs in store", async () => {
        const commit = jest.fn();
        const context = { commit };
        await actions.FETCH_JOBS(context);
        expect(commit).toHaveBeenCalledWith("RECEIVE_JOBS", [
          {
            id: 1,
            title: "Software developer",
          },
        ]);
      });
    });
  });
});
