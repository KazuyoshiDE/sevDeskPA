<template>
  <div class="price-index__wrapper">
    <div class="price-index__description">
      <span class="description__item">Währung</span>
      <span class="description__item">Kaufpreis</span>
      <span class="description__item">Verkaufspreis</span>
      <span class="description__item">Letzter Verkaufspreis</span>
    </div>
    <div>
      <div v-for="currency in info" :key="currency.index" class="price-index">
        <span class="price-index__currency">{{ currency.symbol }}</span>
        <span class="price-index__buy">{{ currency.buy }}</span>
        <span class="price-index__sell">{{ currency.sell }}</span>
        <span class="price-index__last">{{ currency.last }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
    return {
      info: null
    }
  },

   mounted () {
    axios
      .get('https://blockchain.info/ticker')
      .then(response => (this.info = response.data))
  },
}
</script>

<style lang="scss">
.home {
  h3 {
    margin-bottom: 45px;
  }
}

.price-index__wrapper {
  margin: auto;

  .price-index__description {
    display: flex;

    .description__item {
      flex: 1;
      font-weight: 600;
    }
  }

  .price-index {
    display: flex;
    padding: 20px 25px;

    span {
      flex: 1;
    }
  }
}
</style>
