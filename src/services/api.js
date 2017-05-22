import axios from 'axios'

const host = 'https://api.themoviedb.org/3'
const apiKey = 'api_key=400b1e890742cab1385d0728152a050f';

export default {
  getMovies() {
    return axios.get(`${host}/discover/movie?${apiKey}`)
      .then(function (response) {
        return response.data.results;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  getGenres() {
    return axios.get(`${host}/genre/movie/list?${apiKey}`)
      .then(function (response) {
        return response.data.genres;
      })
      .catch(function (error) {
        console.log(error);
      });

  }
}
