<template lang="html">
  <div>
    <div v-if="savedMovies.length" class="movies">
      <movie v-for="movie in savedMovies" :movie="movie">
      </movie>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import movie from './Movie'

export default {
  computed: {
    ...mapGetters([
      'savedMovies'
    ])
  },
  components: {
    movie
  }
}
</script>

<style lang="scss">
</style>
