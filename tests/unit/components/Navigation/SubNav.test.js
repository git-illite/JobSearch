import { mount } from "@vue/test-utils";
import SubNav from "@/components/Navigation/SubNav";

describe("SubNav", () => {
  describe("When us is on job page", () => {
    it("displays job count", () => {
      const wrapper = mount(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: true,
          };
        },
      });
      const jobCount = wrapper.find("[data-test = 'job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });
  describe("SubNav", () => {
    it("doesn't display job count", () => {
      const wrapper = mount(SubNav, {
        data() {
          return {
            onJobResultsPage: false,
          };
        },
      });
      const jobCount = wrapper.find("[data-test = 'job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
