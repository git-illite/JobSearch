import { mount } from "@vue/test-utils";
import JobSearchForm from "@/components/JobSearch/JobSearchForm";

describe("Headline", () => {
  describe("when user submits form", () => {
    it("directs user to job results page with user search parameters", async () => {
      const push = jest.fn();
      const $router = { push };
      const wrapper = mount(JobSearchForm, {
        attachTo: document.body,
        global: {
          mocks: {
            $router,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });
      const roleInput = wrapper.find("[data-test='role-input']");
      await roleInput.setValue("Vue Developer");
      const LocationInput = wrapper.find("[data-test='location-input']");
      await LocationInput.setValue("Toronto");

      const submitButton = wrapper.find("[data-test='form-submit-button']");
      await submitButton.trigger("click");

      expect(push).toHaveBeenCalledWith({
        name: "JobResults",
        query: {
          role: "Vue Developer",
          location: "Toronto",
        },
      });
    });
  });
});
