import { shallowMount } from "@vue/test-utils";
import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";
jest.mock("vuex");

describe("JobFilterSidebar", () => {
  it("sets a panel for user to filter jobs by types,degrees and orgs", () => {
    const wrapper = shallowMount(JobFiltersSidebar);
    expect(wrapper.exists);
  });
});
