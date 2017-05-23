<template lang="html">
  <article class="movies__item">
    <button class="movies__like" @click="saveMovie(movie.id)">
      <i :class="movie.saved ? 'fa fa-check' : 'fa fa-star'"></i>
    </button>
    <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="">
  </article>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['movie'],
  methods: {
    ...mapMutations([
      'saveMovie'
    ])
  }
}
</script>
