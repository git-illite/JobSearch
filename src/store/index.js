import { createStore } from "vuex";

export default createStore({
  state: {
    isLoggedIn: false,
  },
  getters: {},
  mutations: {
    LOGIN_USER(state) {
      state.isLoggedIn = true;
    },
  },
  strict: process.env.NODE_ENV !== "production",
  actions: {},
  modules: {},
});
