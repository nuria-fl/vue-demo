<template lang="html">
  <div>
    Filter by genre:
    <select @change="selectGenre" :value="selected">
      <option v-for="item in items" :value="item.id">
        {{item.name}}
      </option>
    </select>
    <button type="button" v-show="selected" @click="clearFilters">
      Clear filter
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: false
    }
  },
  props: ['filterName', 'items', 'selected'],
  methods: {
    selectGenre(e) {
      this.$emit('update:selected', e.target.value)
    },
    clearFilters() {
      this.$emit('update:selected', null)
    }
  }
}
</script>

<style lang="css">
</style>
