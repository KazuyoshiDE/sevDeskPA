<template>
  <div class="home">
    <h3>Bitcoin Price Index</h3>
    <priceIndex />
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
