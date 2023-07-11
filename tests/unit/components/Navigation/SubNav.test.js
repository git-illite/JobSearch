import { mount } from "@vue/test-utils";
import SubNav from "@/components/Navigation/SubNav";
import useConfirmRoute from "@/composables/useConfirmRoute";
import { useFilteredJobs } from "@/store/composables";
jest.mock("@/store/composables");
jest.mock("@/composables/useConfirmRoute");
describe("SubNav", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });
  describe("When us is on job page", () => {
    it("displays job count", () => {
      useConfirmRoute.mockReturnValue(true);
      useFilteredJobs.mockReturnValue([{ id: 1 }, { id: 2 }]);
      const wrapper = mount(SubNav, createConfig());
      const jobCount = wrapper.find("[data-test = 'job-count']");
      expect(jobCount.text()).toBe("2 jobs matched");
    });
  });
  describe("SubNav", () => {
    it("doesn't display job count", () => {
      useConfirmRoute.mockReturnValue(false);
      useFilteredJobs.mockReturnValue([]);
      const wrapper = mount(SubNav, createConfig());
      const jobCount = wrapper.find("[data-test = 'job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
