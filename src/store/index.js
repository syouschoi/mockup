import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    info: {
      userName: "",
      userAddr: "",
      userMoney: "",
      userAnotherAddr: ""
    }
  },
  mutations: {
    SET_INFO(state, payload) {
      state.info = Object.assign(state.info, payload);
    }
  },
  actions: {
    SET_INFO({ commit }, payload) {
      commit("SET_INFO", payload);
    }
  }
});
