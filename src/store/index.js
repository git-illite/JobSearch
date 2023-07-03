import { createStore } from "vuex";

export const state = () => {
  return {
    isLoggedIn: false,
  };
};

export const mutations = {
  LOGIN_USER(state) {
    state.isLoggedIn = true;
  },
};

const store = createStore({
  state,
  getters: {},
  mutations,
  strict: process.env.NODE_ENV !== "production",
  actions: {},
  modules: {},
});

export default store;
