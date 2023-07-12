import { useRoute } from "vue-router";
jest.mock("vue-router");

import useCurrentPage from "@/composables/useCurrentPage";

describe("useCurrentPage", () => {
  describe("when query params includes page", () => {
    it("returns page", () => {
      useRoute.mockReturnValue({
        query: {
          page: "5",
        },
      });
      const result = useCurrentPage();
      expect(result.value).toBe(5);
    });
  });

  describe("when query params excludes page", () => {
    it("returns to first page", () => {
      useRoute.mockReturnValue({
        query: {
          page: "",
        },
      });
      const result = useCurrentPage();
      expect(result.value).toBe(1);
    });
  });
});
