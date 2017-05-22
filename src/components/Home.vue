<template>
  <div>
    <header v-if="genres.length" class="header">
      <dropdown
        filterName="genre"
        :items="genres"
        :selected.sync="selectedGenre">
      </dropdown>
    </header>

    <div v-if="movies.length" class="movies">
      <movie v-for="movie in filteredMovies" :movie="movie">
      </movie>
    </div>
  </div>
</template>

<script>
import api from '../services/api'
import dropdown from './Dropdown'
import movie from './Movie'

export default {
  name: 'hello',
  data () {
    return {
      movies: [],
      genres: [],
      selectedGenre: null
    }
  },
  computed: {
    filteredMovies() {
      if (this.selectedGenre) {
        const genre = parseInt(this.selectedGenre)

        return this.movies.filter( movie => {
          return movie.genre_ids.indexOf(genre) !== -1
        })
      } else {
        return this.movies
      }
    }
  },
  methods: {

  },
  created () {
    api.getMovies()
      .then(data => {
        this.movies = data;
      })

    api.getGenres()
      .then(genres => {
        this.genres = genres;
      })
  },
  components: {
    dropdown,
    movie
  }
}
</script>

<style lang="scss">

</style>
