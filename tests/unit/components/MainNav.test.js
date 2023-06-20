import { shallowMount } from "@vue/test-utils";
import MainNav from "@/components/MainNav";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = shallowMount(MainNav);
    expect(wrapper.text()).toMatch("Aden Careers");
  });

  it("displays menu items for navigation", () => {
    const wrapper = shallowMount(MainNav);
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Aden",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });
  describe("When user is logged out", () => {
    it("prompts user to sign in", () => {
      const wrapper = shallowMount(MainNav);
      const loginButton = wrapper.find("[data-test='login-button']");
      const profileImage = wrapper.findComponent("[data-test='profile-image']");
      expect(loginButton.exists()).toBe(true);
      expect(profileImage.exists()).toBe(false);
    });
  });
  describe("When user is logged in", () => {
    it("display users profile picture", async () => {
      const wrapper = shallowMount(MainNav);
      let profileImage = wrapper.findComponent("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      profileImage = wrapper.findComponent("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });

    it("displays subNav menu with additional info", async () => {
      const wrapper = shallowMount(MainNav);
      let subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(true);
    });
  });
});
