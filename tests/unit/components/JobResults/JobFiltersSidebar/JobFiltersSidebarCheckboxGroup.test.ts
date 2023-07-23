import { shallowMount } from "@vue/test-utils";
import JobFilterSidebarCheckboxGroups from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";
import { useRouter } from "vue-router";
jest.mock("vue-router");
import { useStore } from "vuex";
jest.mock("vuex");
jest.mock("@/store/composables");

const useRouterMock = useRouter as jest.Mock;
const useStoreMock = useStore as jest.Mock;

describe("JobFiltersSidebarCheckboxGroup", () => {
  const createConfig = (props = {}) => ({
    props: {
      uniqueValues: new Set(["ValueA", "ValueB"]),
      mutation: "Some mutation",
      ...props,
    },
  });
  it("renders unique list of Job Types for filtering jobs", async () => {
    useStoreMock.mockReturnValue({ commit: jest.fn(), subscribe: jest.fn() });
    const props = {
      uniqueValues: new Set(["ValueA", "ValueB"]),
    };
    const wrapper = shallowMount(
      JobFilterSidebarCheckboxGroups,
      createConfig(props)
    );
    const inputLabels = wrapper.findAll("[data-test='value']");
    const inputs = inputLabels.map((node) => node.text());
    expect(inputs).toEqual(["ValueA", "ValueB"]);
  });

  describe("When user clicks check box", () => {
    it("communicates that user has selected checkbox for value", async () => {
      const commit = jest.fn();
      useStoreMock.mockReturnValue({ commit, subscribe: jest.fn() });
      useRouterMock.mockReturnValue({ push: jest.fn() });
      const props = {
        mutation: "SOME_MUTATION",
        uniqueValues: new Set(["Full-time"]),
      };
      const wrapper = shallowMount(
        JobFilterSidebarCheckboxGroups,
        createConfig(props)
      );
      const fullTimeInput = wrapper.find("[data-test='Full-time']");
      await fullTimeInput.setValue(true);
      expect(commit).toHaveBeenCalledWith("SOME_MUTATION", ["Full-time"]);
    });
    it("navigate user to JobResults page to see fresh batch of filtered jobs", async () => {
      useStoreMock.mockReturnValue({ commit: jest.fn(), subscribe: jest.fn() });
      const push = jest.fn();
      useRouterMock.mockReturnValue({ push });
      const props = {
        uniqueValues: new Set(["Full-time"]),
      };
      const wrapper = shallowMount(
        JobFilterSidebarCheckboxGroups,
        createConfig(props)
      );
      const fullTimeInput = wrapper.find("[data-test='Full-time']");
      await fullTimeInput.setValue(true);
      expect(push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });
});
