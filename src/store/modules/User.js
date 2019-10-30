/* eslint-disable new-parens */
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
import { AUTH } from '../mutations_types';

export default {
  state: {
    auth: false,
    login: null,
  },
  mutations: {
    [AUTH](state, payload) {
      state.login = payload;
      state.auth = true;
    },
  },
  actions: {
    authUser({ commit }, payload) {
      commit('AUTH', payload);
    },
    checkUser({ commit }) {
      const ls = localStorage;

      if (ls.getItem('login')) {
        const login = ls.getItem('login');
        return login;
      }

      return false;
    },
  },
  getters: {
    haveAuth(state) {
      return !!state.auth;
    },
  },
};
