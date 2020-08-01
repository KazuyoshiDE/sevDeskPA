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
  padding: 25px 0 0 0;
  background: #050c13b8;

  @media (min-width: 600px) {
    width: 75%;
  }

  @media (min-width: 992px) {
    width: 50%;
  }

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

    &:nth-child(even) {
      background: #0b1a354f;
    }

    span {
      flex: 1;
    }
  }
}
</style>
