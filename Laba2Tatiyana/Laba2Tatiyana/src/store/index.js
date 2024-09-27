import { createStore } from 'vuex'
import cars from './cars';
import buyers from './buyers';
export default createStore({
  modules: {
    cars,
    buyers,
  },
  state: {},
  mutations: {},
  actions: {},
})
