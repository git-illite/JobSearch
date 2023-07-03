import { createStore } from "vuex";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const state = () => {
  return {
    isLoggedIn: false,
  };
};

export const mutations = {
  [LOGIN_USER](state) {
    state.isLoggedIn = true;
  },
  [LOGOUT_USER](state) {
    state.isLoggedIn = false;
  },
};

const store = createStore({
  state,
  //getters: {},
  mutations,
  strict: process.env.NODE_ENV !== "production",
  // actions: {},
  // modules: {},
});

export default store;
