<template>
  <div id="app">
    <div id="particles-js"></div>
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
    M.AutoInit();
    window.particlesJS.load('particles-js', 'particles.json', null);
  }
}
</script>

<style lang="scss">
body {
  background: rgb(29, 34, 43);
  background-size: cover;
}

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;

  #particles-js {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
</style>
