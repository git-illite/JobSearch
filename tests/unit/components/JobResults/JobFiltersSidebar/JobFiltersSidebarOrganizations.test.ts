import { shallowMount } from "@vue/test-utils";
import JobFiltersSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue";
import { useUniqueOrganizations } from "@/store/composables";
jest.mock("@/store/composables");
jest.mock("vuex");

const useUniqueOrganizationsMock = useUniqueOrganizations as jest.Mock;
describe("JobFiltersSidebarOrganizations", () => {
  it("allows user to filter jobs by organizations", () => {
    useUniqueOrganizationsMock.mockReturnValue(new Set(["AirBnB"]));
    const wrapper = shallowMount(JobFiltersSidebarOrganizations);
    const jobOrganizationsFilter = wrapper.findComponent({
      name: "JobFiltersSidebarCheckboxGroup",
    });
    const { uniqueValues, mutation } = jobOrganizationsFilter.props();
    console.log("uniqueValue: ", uniqueValues);

    expect(uniqueValues).toEqual(new Set(["AirBnB"]));
    expect(mutation).toBe("ADD_SELECTED_ORGANIZATIONS");
  });
});
