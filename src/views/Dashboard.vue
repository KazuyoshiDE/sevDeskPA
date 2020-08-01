<template>
  <div class="dashboard">
    <div class="dashboard__content">
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
  .dashboard__content {
    width: 100%;
    margin: auto;

    @media (min-width: 768px) {
      min-width: 650px;
      width: 0;
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 820px;
      background: url(../assets/background-top.jpg);
      z-index: -1;
    }
  }
}
</style>
