<template lang="html">
  <article class="movies__item">
    <button class="movies__like">
      <i class="fa fa-star"></i>
    </button>
    <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="">
  </article>
</template>

<script>
export default {
  props: ['movie']
}
</script>
