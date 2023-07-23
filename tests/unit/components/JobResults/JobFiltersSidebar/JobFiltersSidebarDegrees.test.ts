import { shallowMount } from "@vue/test-utils";
import JobFiltersSidebarDegrees from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarDegrees.vue";
import { useUniqueDegrees } from "@/store/composables";
jest.mock("@/store/composables");
jest.mock("vuex");

const useUniqueDegreesMock = useUniqueDegrees as jest.Mock;

describe("JobFiltersSidebarDegrees", () => {
  it("allows user to filter jobs by degrees", () => {
    useUniqueDegreesMock.mockReturnValue(["Associates", "Bachelor's"]);
    const wrapper = shallowMount(JobFiltersSidebarDegrees);
    const jobDegreesFilter = wrapper.findComponent({
      name: "JobFiltersSidebarCheckboxGroup",
    });
    const { uniqueValues, mutation } = jobDegreesFilter.props();
    expect(uniqueValues).toEqual(["Associates", "Bachelor's"]);
    expect(mutation).toBe("ADD_SELECTED_DEGREES");
  });
});
