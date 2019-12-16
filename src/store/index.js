import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    CurrentPage: 0,
    tokenID: window.localStorage.getItem('tokenID')
  },
  mutations: {
    changePage (state, Page) {
      state.CurrentPage = Page
    },
    GettokenID (state, ID) {
      state.tokenID = ID
    }
  }
})
