import Vue from 'vue'
import Vuex from 'vuex'
import Movies from './modules/movies'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    movies: Movies
  }
})