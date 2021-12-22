import { createStore } from "vuex"

export default createStore({
  state: {
    topics: null,
  },
  mutations: {
    getTopics(state, newTopics) {
      state.topics = newTopics
    },
  },
  actions: {},
  modules: {},
})
