<template>
  <div id="app">
    <TheHeader />
    <router-view />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import M from 'materialize-css'

export default {
  components: {
    TheHeader
  },

  mounted() {
    M.AutoInit()
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
