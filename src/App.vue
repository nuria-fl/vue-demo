<template>
  <div id="app">
    <nav class="nav">
      <router-link :to="{name: 'home'}">Home</router-link>
      <router-link :to="{name: 'myMovies'}">My Movies</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style src="./assets/scss/index.scss" lang="scss">
</style>
