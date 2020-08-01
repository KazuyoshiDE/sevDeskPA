<template>
  <div class="container">
    <div class="bitcoin-details">
      <h3>Bitcoin Details</h3>
      <bitcoinDetails />
    </div>
  </div>
</template>

<script>
import BitcoinDetails from '@/components/BitcoinDetails.vue'

export default {
  components: {
    BitcoinDetails
  }
}
</script>
