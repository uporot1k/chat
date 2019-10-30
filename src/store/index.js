import Vue from 'vue';
import Vuex from 'vuex';
import User from './modules/User';
import Connection from './modules/Connection';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    User,
    Connection,
  },
});
