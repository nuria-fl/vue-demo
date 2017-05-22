<template lang="html">
  <div>
    Filter by genre:
    <select>
      <option v-for="item in items" :value="item.id">
        {{item.name}}
      </option>
    </select>
    <button type="button" v-show="selected">
      Clear filter
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: ['filterName', 'items', 'selected']
}
</script>

<style lang="css">
</style>
