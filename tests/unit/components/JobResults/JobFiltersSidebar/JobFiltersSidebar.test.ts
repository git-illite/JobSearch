import { shallowMount, mount } from "@vue/test-utils";
import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";
import {
  useUniqueJobTypes,
  useUniqueOrganizations,
  useUniqueDegrees,
} from "@/store/composables";
jest.mock("@/store/composables");

const useUniqueJobTypesMock = useUniqueJobTypes as jest.Mock;
const useUniqueOrganizationsMock = useUniqueOrganizations as jest.Mock;
const useUniqueDegreesMock = useUniqueDegrees as jest.Mock;

describe("JobFilterSidebar", () => {
  it("allows user to filter jobs by job types", () => {
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));
    useUniqueOrganizationsMock.mockReturnValue(new Set(["AirBnB"]));
    useUniqueDegreesMock.mockReturnValue(["Associates", "Bachelor's"]);
    const wrapper = shallowMount(JobFiltersSidebar);
    const jobTypesFilter = wrapper.findComponent(
      "[data-test='job-types-filter']"
    );

    // const { header, uniqueValues, mutation } = jobTypesFilter.props();
    // expect(header).toBe("Job Types");
    // expect(uniqueValues).toBe(new Set(["Full-time", "Part-time"]));
    // expect(mutation).toBe("ADD_SELECTED_JOB_TYPES");
  });
  it("allows user to filter jobs by organizations", () => {
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));
    useUniqueOrganizationsMock.mockReturnValue(new Set(["AirBnB"]));
    useUniqueDegreesMock.mockReturnValue(["Associates", "Bachelor's"]);
    const wrapper = shallowMount(JobFiltersSidebar);
    const jobTypesFilter = wrapper.findComponent(
      "[data-test='organizations-filter']"
    );
    // const { header, uniqueValues, mutation } = jobTypesFilter.attributes;
    // expect(header).toBe("Organizations");
    // expect(uniqueValues).toBe(new Set(["AirBnB"]));
    // expect(mutation).toBe("ADD_SELECTED_ORGANIZATIONS");
  });

  fit("allows user to filter jobs by degrees", () => {
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));
    useUniqueOrganizationsMock.mockReturnValue(new Set(["AirBnB"]));
    useUniqueDegreesMock.mockReturnValue(["Associates", "Bachelor's"]);
    const wrapper = mount(JobFiltersSidebar, { props: {} });
    const jobTypesFilter = wrapper.findComponent(
      "[data-test='degrees-filter']"
    );
    console.log("WrapperVM: ", jobTypesFilter);

    const { header, uniqueValues, mutation } = jobTypesFilter.props();

    expect(jobTypesFilter.exists());
    //expec;
    // expect(uniqueValues).toBe(["Associates", "Bachelor's"]);
    // expect(mutation).toBe("ADD_SELECTED_DEGREES");
  });
});
