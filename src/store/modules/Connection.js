/* eslint-disable no-debugger */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import { MUTATE_MESSAGES, SET_WS } from '../mutations_types';

export default {
  state: {
    ws: null,
    messages: [],
  },
  mutations: {
    [MUTATE_MESSAGES](state, payload) {
      state.messages = [...state.messages, payload];
    },
    [SET_WS](state, payload) {
      state.ws = payload;
    },
  },
  actions: {
    login({ commit, dispatch }, payload) {
      dispatch('createConnection', payload)
        .then(() => dispatch('readInStorage', payload))
        .then(() => dispatch('authUser', payload))
        .catch(e => console.log(e));
    },
    readInStorage({ commit, dispatch }, payload) {
      const ls = localStorage;
      if (!ls.getItem('login')) {
        ls.setItem('login', payload);
      }
    },
    createConnection({ commit, dispatch }, payload) {
      const ws = new WebSocket(`ws://pm.tada.team/ws?name=${payload}`);
      ws.addEventListener('open', e => dispatch('onWsOpen', e));
      ws.addEventListener('message', e => dispatch('onWsMessage', e));

      commit('SET_WS', ws);
    },
    sendWsMessage({ state, commit }, message) {
      const { ws } = state;

      ws.send('Hello server');
    },
    onWsMessage({ commit }, event) {
      const message = JSON.parse(event.data);
      commit('MUTATE_MESSAGES', message);
    },
    onWsOpen({ commit }, event) {
      console.log('Hello Server!', event);
    },
  },
};
