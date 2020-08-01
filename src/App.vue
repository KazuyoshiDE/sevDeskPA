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
}
</script>

<style lang="scss">
body {
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 427px;
    left: 0;
    background: url(assets/background.jpg);
    background-position-y: 590px;
  }
}

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(54, 54, 54);

  h3 {
    font-size: 60px;
    font-weight: 800;

    @media (min-width: 768px) {
      font-size: 120px;
    }
  }
}
</style>
