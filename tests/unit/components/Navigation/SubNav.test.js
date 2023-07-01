import { mount } from "@vue/test-utils";
import SubNav from "@/components/Navigation/SubNav";

describe("SubNav", () => {
  const createConfig = (routeName) => ({
    global: {
      mocks: {
        $route: {
          name: routeName,
        },
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });
  describe("When us is on job page", () => {
    it("displays job count", () => {
      const routeName = "JobResults";

      const wrapper = mount(SubNav, createConfig(routeName));
      const jobCount = wrapper.find("[data-test = 'job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });
  describe("SubNav", () => {
    it("doesn't display job count", () => {
      const routeName = "Home";
      const wrapper = mount(SubNav, createConfig(routeName));
      const jobCount = wrapper.find("[data-test = 'job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
