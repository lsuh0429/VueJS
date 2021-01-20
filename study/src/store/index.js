import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    token : 'testToken$!%1323'
  },
  mutations: {
    setIsLogin(state, data) {
      state.isLogin = data
    }
  },
  actions: {
    setIsLogin({commit}, data) {
      commit('setIsLogin', data)
    }
  },
  modules: {
  }
})
