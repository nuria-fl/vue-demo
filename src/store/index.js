import Vue from 'vue';
import Vuex from 'vuex';
import api from '../services/api';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    movies: [],
    genres: []
  },
  getters: {
    savedMovies (state) {
      return state.movies.filter(movie => {
        return movie.saved === true
      })
    }
  },
  mutations: {
    addMovie (state, movie) {
      state.movies.push(movie)
    },
    addGenre (state, genre) {
      state.genres.push(genre)
    },
    saveMovie (state, movieId) {
      const movieIdx = state.movies.findIndex(movie => movie.id === movieId)

      const updatedMovie = Object.assign({}, state.movies[movieIdx], {saved: true})

      state.movies.splice(movieIdx, 1, updatedMovie)
    }
  },
  actions: {
    getMovies ({ state, commit }) {
      if(!state.movies.length) {
        api.getMovies()
          .then( data => {
            data.forEach(movie => commit('addMovie', movie))
          })
      }
    },
    getGenres ({ state, commit }) {
      if(!state.genres.length) {
        api.getGenres()
          .then( data => {
            data.forEach(genre => commit('addGenre', genre))
          })
      }
    }
  }
})

export default store;
