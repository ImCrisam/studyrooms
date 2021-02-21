<template>
  <nav-bar />
  <section-search />
</template>

<script>
import NavBar from '../components/NavBar.vue'
import SectionSearch from '../components/SectionSearch.vue'
export default {
  name: 'Home',
  components: {
    SectionSearch,
    NavBar
  }
}
</script>

<style></style>
