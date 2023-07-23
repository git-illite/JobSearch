import { shallowMount } from "@vue/test-utils";
import JobFiltersSidebarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes.vue";
import { useUniqueJobTypes } from "@/store/composables";

jest.mock("@/store/composables");
jest.mock("vuex");

const useUniqueJobTypesMock = useUniqueJobTypes as jest.Mock;

describe("JobFiltersSidebarJobTypes", () => {
  it("allows user to filter jobs by job types", () => {
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));
    const wrapper = shallowMount(JobFiltersSidebarJobTypes);
    const jobTypesFilter = wrapper.findComponent({
      name: "JobFiltersSidebarCheckboxGroup",
    });
    const { uniqueValues, mutation } = jobTypesFilter.props();

    expect(uniqueValues).toEqual(new Set(["Full-time", "Part-time"]));
    expect(mutation).toBe("ADD_SELECTED_JOB_TYPES");
  });
});
