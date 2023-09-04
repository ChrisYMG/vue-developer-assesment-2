import { createStore } from "vuex";

export default createStore({
  state: {
    movieInfo: {},
    history: {},
  },
  getters: {
    getMovieInfo(state) {
      return state.movieInfo;
    },
    getHistory(state) {
      return state.history
    },
  },
  mutations: {
    getMovieInfo(state, val) {
      state.movieInfo = val;
    },
    saveHistory(state, val) {
      if (!state.history[val.title]) {
        state.history[val.title] = val;
      }
    },
  },
  actions: {},
  modules: {},
});
