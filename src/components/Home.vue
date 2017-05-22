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
import { mapState, mapActions } from 'vuex'
import api from '../services/api'
import dropdown from './Dropdown'
import movie from './Movie'

export default {
  name: 'hello',
  data () {
    return {
      selectedGenre: null
    }
  },
  computed: {
    ...mapState([
      'movies',
      'genres'
    ]),
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
    ...mapActions([
      'getMovies',
      'getGenres'
    ])
  },
  created () {
    this.getMovies()
    this.getGenres()
  },
  components: {
    dropdown,
    movie
  }
}
</script>

<style lang="scss">

</style>
