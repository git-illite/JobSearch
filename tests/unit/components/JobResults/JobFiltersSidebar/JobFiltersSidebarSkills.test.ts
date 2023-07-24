import { shallowMount } from "@vue/test-utils";
import { useStore } from "vuex";
jest.mock("vuex");
const useStoreMock = useStore as jest.Mock;

import JobFiltersSidebarSkills from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarSkills.vue";

describe("JobFiltersSidebarSkills", () => {
  it("populates the input from store", () => {
    useStoreMock.mockReturnValue({
      state: {
        skillsSearchTerm: "Programmer",
      },
      commit: jest.fn(),
    });
    const wrapper = shallowMount(JobFiltersSidebarSkills);
    const skillSearchInput = wrapper.find("[data-test='skills-search-input']");
    const inputElement = skillSearchInput.element as HTMLInputElement;
    console.log("input Element:", inputElement);
    expect(inputElement.value).toBe("Programmer");
  });
});
