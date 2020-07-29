<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <h3>Bitcoin Price Index</h3>

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
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Dashbaord',

  data() {
    return {
      info: null
    }
  },

  components: {
    HelloWorld
  },

  filters: {
    
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
    padding: 20px 0;

    &:nth-child(even) {
      background-color: rgb(223, 223, 223);
    }

    span {
      flex: 1;
    }
  }
}
</style>
