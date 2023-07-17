import { useRoute } from "vue-router";
jest.mock("vue-router");

import useCurrentPage from "@/composables/useCurrentPage";

const useRouteMock = useRoute as jest.Mock;

describe("useCurrentPage", () => {
  describe("when query params includes page", () => {
    it("returns page", () => {
      useRouteMock.mockReturnValue({
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
      useRouteMock.mockReturnValue({
        query: {
          page: "",
        },
      });
      const result = useCurrentPage();
      expect(result.value).toBe(1);
    });
  });
});
