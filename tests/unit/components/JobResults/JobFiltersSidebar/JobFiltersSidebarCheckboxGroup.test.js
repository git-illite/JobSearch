import { mount } from "@vue/test-utils";
import JobFilterSidebarCheckboxGroups from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup";
import { useRouter } from "vue-router";
jest.mock("vue-router");
import { useStore } from "vuex";
jest.mock("vuex");
jest.mock("@/store/composables");

describe("JobFiltersSidebarCheckboxGroup", () => {
  describe("JobFiltersSidebarJobTypes", () => {
    const createConfig = (props = {}) => ({
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
      props: {
        header: "Some header",
        uniqueValues: new Set(["ValueA", "ValueB"]),
        mutation: "Some mutation",
        ...props,
      },
    });
    it("renders unique list of Job Types for filtering jobs", async () => {
      const props = {
        uniqueValues: new Set(["ValueA", "ValueB"]),
      };
      const wrapper = mount(
        JobFilterSidebarCheckboxGroups,
        createConfig(props)
      );
      const clickableArea = wrapper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      const inputLabels = wrapper.findAll("[data-test='value']");
      const inputs = inputLabels.map((node) => node.text());
      expect(inputs).toEqual(["ValueA", "ValueB"]);
    });

    describe("When user clicks check box", () => {
      it("communicates that user has selected checkbox for value", async () => {
        const commit = jest.fn();
        useStore.mockReturnValue({ commit });
        useRouter.mockReturnValue({ push: jest.fn() });
        const props = {
          mutation: "SOME_MUTATION",
          uniqueValues: new Set(["Full-time"]),
        };
        const wrapper = mount(
          JobFilterSidebarCheckboxGroups,
          createConfig(props)
        );
        const clickableArea = wrapper.find("[data-test='clickable-area']");
        await clickableArea.trigger("click");
        const fullTimeInput = wrapper.find("[data-test='Full-time']");
        await fullTimeInput.setChecked();
        expect(commit).toHaveBeenCalledWith("SOME_MUTATION", ["Full-time"]);
      });
      it("navigate user to JobResults page to see fresh batch of filtered jobs", async () => {
        useStore.mockReturnValue({ commit: jest.fn() });
        const push = jest.fn();
        useRouter.mockReturnValue({ push });
        const props = {
          uniqueValues: new Set(["Full-time"]),
        };
        const wrapper = mount(
          JobFilterSidebarCheckboxGroups,
          createConfig(props)
        );
        const clickableArea = wrapper.find("[data-test='clickable-area']");
        await clickableArea.trigger("click");
        const fullTimeInput = wrapper.find("[data-test='Full-time']");
        await fullTimeInput.setChecked();
        expect(push).toHaveBeenCalledWith({ name: "JobResults" });
      });
    });
  });
});