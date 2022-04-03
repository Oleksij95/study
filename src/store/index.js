import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: 'dark',
  },
  mutations: {
    SET_THEME(state, theme) {
      state.theme = theme;
    },
  },
  actions: {
    changeTheme({ commit }, theme) {
      commit('SET_THEME', theme);
    },
  },
  getters: {
    THEME: (s) => s.theme,
  },
  modules: {},
});
