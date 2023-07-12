import { useStore } from "vuex";
jest.mock("vuex");
import {
  useFilteredJobs,
  useUniqueJobTypes,
  useUniqueOrganizations,
  useFetchJobsDispatch,
} from "@/store/composables";

describe("Store composables", () => {
  describe("UseFilteredJobs", () => {
    it("retrieves filtered job from store", () => {
      useStore.mockReturnValue({
        getters: {
          FILTERED_JOBS: [{ id: 1 }],
        },
      });
      const result = useFilteredJobs();
      expect(result.value).toEqual([{ id: 1 }]);
    });
  });

  describe("UseUniqueJobTypes", () => {
    it("retrieves unique job types from store", () => {
      useStore.mockReturnValue({
        getters: {
          UNIQUE_JOB_TYPES: new Set(["full-time"]),
        },
      });
      const result = useUniqueJobTypes();
      expect(result.value).toEqual(new Set(["full-time"]));
    });
  });

  describe("UseUniqueOrganizations", () => {
    it("retrieves unique organizations from store", () => {
      useStore.mockReturnValue({
        getters: {
          UNIQUE_ORGANIZATIONS: new Set(["Google"]),
        },
      });
      const result = useUniqueOrganizations();
      expect(result.value).toEqual(new Set(["Google"]));
    });
  });

  describe("UseFetchJobsDispatch", () => {
    it("it sends call to fetch jobs from API", () => {
      const dispatch = jest.fn();
      useStore.mockReturnValue({
        dispatch,
      });
      useFetchJobsDispatch();
      expect(dispatch).toHaveBeenCalledWith("FETCH_JOBS");
    });
  });
});
