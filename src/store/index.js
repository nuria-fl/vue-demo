import Vue from 'vue';
import Vuex from 'vuex';
import api from '../services/api';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    movies: [],
    genres: []
  },
  mutations: {
    addMovie (state, movie) {
      state.movies.push(movie)
    },
    addGenre (state, genre) {
      state.genres.push(genre)
    }
  },
  actions: {
    getMovies ({ commit }) {
      api.getMovies()
        .then( data => {
          data.forEach(movie => commit('addMovie', movie))
        })
    },
    getGenres ({ commit }) {
      api.getGenres()
        .then( data => {
          data.forEach(genre => commit('addGenre', genre))
        })
    }
  }
})

export default store;
