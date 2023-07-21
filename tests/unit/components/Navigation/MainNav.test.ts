import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import { createStore } from "vuex";
import MainNav from "@/components/Navigation/MainNav.vue";
import { GlobalState } from "@/store/types";
import { RouterLink } from "vue-router";
import useConfirmRoute from "@/composables/useConfirmRoute";

interface mockStore {
  state: Partial<GlobalState>;
}

describe("MainNav", () => {
  const createConfig = ($store: mockStore) => ({
    global: {
      mocks: {
        $store,
      },
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  fit("Click on name navigates to home page", async () => {
    const $store = {
      state: {
        isLoggedIn: false,
      },
    };
    const wrapper = shallowMount(MainNav, createConfig($store));
    const clickableArea = wrapper.find("[data-test='home-logo']");
    // await clickableArea.trigger("click");
    // const toProp = clickableArea.props("to");
    // expect(toProp).toBe("/");
  });

  it("displays company name", () => {
    const $store = {
      state: {
        isLoggedIn: false,
      },
    };
    const wrapper = shallowMount(MainNav, createConfig($store));
    expect(wrapper.text()).toMatch("Aden Careers");
  });

  it("displays menu items for navigation", () => {
    const $store = {
      state: {
        isLoggedIn: false,
      },
    };
    const wrapper = shallowMount(MainNav, createConfig($store));
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
      const $store = {
        state: {
          isLoggedIn: false,
        },
      };
      const wrapper = shallowMount(MainNav, createConfig($store));
      const loginButton = wrapper.find("[data-test='login-button']");
      const profileImage = wrapper.findComponent("[data-test='profile-image']");
      expect(loginButton.exists()).toBe(true);
      expect(profileImage.exists()).toBe(false);
    });
    it("issues call to Vuex to login user", async () => {
      const commit = jest.fn();
      const $store = {
        state: {
          isLoggedIn: false,
        },
        commit,
      };
      const wrapper = shallowMount(MainNav, createConfig($store));
      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");
      expect(commit).toHaveBeenCalledWith("LOGIN_USER");
    });
  });
  describe("When user is logged in", () => {
    it("display users profile picture", () => {
      const $store = createStore({
        state: {
          isLoggedIn: true,
        },
      });
      const wrapper = shallowMount(MainNav, createConfig($store));
      const profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });

    it("displays subNav menu with additional info", () => {
      const $store = createStore({
        state() {
          return {
            isLoggedIn: true,
          };
        },
      });
      const wrapper = shallowMount(MainNav, createConfig($store));
      const subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(true);
    });
  });

  describe("When user is logged in", () => {
    it("issues call to Vuex to logout user", async () => {
      const commit = jest.fn();
      const $store = {
        state: {
          isLoggedIn: true,
        },
        commit,
      };
      const wrapper = shallowMount(MainNav, createConfig($store));
      const logoutButton = wrapper.find("[data-test='profile-image']");
      await logoutButton.trigger("click");
      expect(commit).toHaveBeenCalledWith("LOGOUT_USER");
    });
  });
});
