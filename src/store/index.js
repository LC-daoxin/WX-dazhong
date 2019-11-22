import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    CurrentPage: 0
  },
  mutations: {
    changePage (state, Page) {
      state.CurrentPage = Page
    }
  }
})
