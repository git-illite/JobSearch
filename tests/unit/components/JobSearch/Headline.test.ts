import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import Headline from "@/components/JobSearch/Headline.vue";

describe("Headline", () => {
  beforeEach(() => {
    jest.useFakeTimers("legacy"); // Mock the timers
  });

  afterEach(() => {
    jest.useRealTimers(); // Restore the real timers
  });

  describe("Jest Playground", () => {
    it("Display intro action verb", () => {
      const wrapper = mount(Headline);
      const actionPhrase = wrapper.find("[data-test='action-phrase']");
      expect(actionPhrase.text()).toBe("Build for everyone");
    });
  });

  it("changes action ver at a consisten interval", () => {
    mount(Headline);
    expect(setInterval).toHaveBeenCalled();
  });
  it("changes action ver at a consisten interval", async () => {
    const wrapper = mount(Headline);
    jest.runOnlyPendingTimers();
    await nextTick();
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Create for everyone");
  });

  it("removes interval when component disappears", () => {
    const wrapper = mount(Headline);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
  });
});
