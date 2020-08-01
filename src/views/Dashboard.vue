<template>
  <div class="dashboard">
    <div class="dashboard__left"></div>
    <div class="dashboard__right">
      <h3>Bitcoin Price Index</h3>
      <priceIndex />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PriceIndex from '@/components/PriceIndex.vue'

export default {
  components: {
    PriceIndex
  },
}
</script>

<style lang="scss">
.dashboard {
  .dashboard__right {
    width: 100%;
    margin: auto;
    background-color: #fff;

    @media (min-width: 768px) {
      min-width: 650px;
      width: 0;
    }
  }
}
</style>
