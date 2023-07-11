import { useStore } from "vuex";
jest.mock("vuex");
import { useFilteredJobs } from "@/store/composables";

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
});
