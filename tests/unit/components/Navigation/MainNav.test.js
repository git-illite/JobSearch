import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import MainNav from "@/components/Navigation/MainNav";

describe("MainNav", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(MainNav, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
    });
  });
  it("displays company name", () => {
    expect(wrapper.text()).toMatch("Aden Careers");
  });

  it("displays menu items for navigation", () => {
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
      const loginButton = wrapper.find("[data-test='login-button']");
      const profileImage = wrapper.findComponent("[data-test='profile-image']");
      expect(loginButton.exists()).toBe(true);
      expect(profileImage.exists()).toBe(false);
    });
  });
  describe("When user is logged in", () => {
    it("display users profile picture", async () => {
      let profileImage = wrapper.findComponent("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      profileImage = wrapper.findComponent("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });

    it("displays subNav menu with additional info", async () => {
      let subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(true);
    });
  });
});
