import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import { createStore } from "vuex";
import MainNav from "@/components/Navigation/MainNav";

describe("MainNav", () => {
  const createConfig = (store) => ({
    global: {
      plugins: [store],
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("displays company name", () => {
    const store = createStore();
    const wrapper = shallowMount(MainNav, createConfig(store));
    expect(wrapper.text()).toMatch("Aden Careers");
  });

  it("displays menu items for navigation", () => {
    const store = createStore();
    const wrapper = shallowMount(MainNav, createConfig(store));
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
      const store = createStore();
      const wrapper = shallowMount(MainNav, createConfig(store));
      const loginButton = wrapper.find("[data-test='login-button']");
      const profileImage = wrapper.findComponent("[data-test='profile-image']");
      expect(loginButton.exists()).toBe(true);
      expect(profileImage.exists()).toBe(false);
    });
  });
  describe("When user is logged in", () => {
    it("display users profile picture", () => {
      const store = createStore({
        state() {
          return {
            isLoggedIn: true,
          };
        },
      });
      const wrapper = shallowMount(MainNav, createConfig(store));

      const profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });

    it("displays subNav menu with additional info", () => {
      const store = createStore({
        state() {
          return {
            isLoggedIn: true,
          };
        },
      });
      const wrapper = shallowMount(MainNav, createConfig(store));

      const subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(true);
    });
  });
});
