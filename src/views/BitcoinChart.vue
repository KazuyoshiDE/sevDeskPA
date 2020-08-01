<template>
  <div class="bitcoin-chart">
    <h3>Bitcoin Diagramm</h3>
    <bitcoinChart height="600px" width="600px" />
  </div>
</template>

<script>
import BitcoinChart from '@/components/BitcoinChart.vue'

export default {
  components: {
    BitcoinChart,
  }
}
</script>
