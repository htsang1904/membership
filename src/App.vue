<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    HomePage
  }
}
</script>

<style lang="scss" scoped>
</style>
