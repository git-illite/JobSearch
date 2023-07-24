import { shallowMount } from "@vue/test-utils";
import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";
import { useStore } from "vuex";
jest.mock("vuex");
import { useRoute } from "vue-router";
jest.mock("vue-router");
const useRouteMock = useRoute as jest.Mock;
const useStoreMock = useStore as jest.Mock;

describe("JobFilterSidebar", () => {
  it("sets a panel for user to filter jobs by one or more criteria", () => {
    useStoreMock.mockReturnValue({ commit: jest.fn() });
    useRouteMock.mockReturnValue({
      query: {},
    });
    const wrapper = shallowMount(JobFiltersSidebar);
    expect(wrapper.exists()).toBe(true);
  });
  it("reads query params to filter initial jobs for user", () => {
    const commit = jest.fn();
    useStoreMock.mockReturnValue({ commit });
    useRouteMock.mockReturnValue({
      query: {
        role: "Vue",
      },
    });
    shallowMount(JobFiltersSidebar);
    expect(commit).toHaveBeenCalledWith("UPDATE_SKILLS_SEARCH_TERM", "Vue");
  });
});
