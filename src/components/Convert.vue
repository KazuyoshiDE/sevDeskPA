<template>
  <div class="container">
    <div class="row">
      <form @submit.prevent="getFormValue()">
        <div class="col s9">
          <label for="priceField">Menge</label>
          <input type="number" id="priceField" name="price" v-model="form.price" />
        </div>
        <div class="col s3">
          <label for="currencyField">Währung</label>
          <select id="currencyField" name="currency" v-model="form.currency">
            <option
              v-for="currency in form.currencies"
              :value="currency.key"
              :key="currency.index"
            >{{ currency.value }}</option>
          </select>
        </div>
        <button class="btn col col-3" type="submit">Umrechnen</button>
      </form>
      {{ response }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        price: 0,
        currencies: [
          { value: 'Euro', key: 'eur'},
          { value: 'USD', key: 'usd'},
          { value: 'AUD', key: 'aud'},
          { value: 'NZD', key: 'nzd'},
          { value: 'GBP', key: 'gbp'}
        ]
      },

      response: null,
      result: null,
      hasResult: false
    };
  },

  props: {
        currency: String,
        currencies: Array
    },

  methods: {
    getFormValue(submitEvent) {
      if (this.form.currency) {
        axios
      .get('https://blockchain.info/tobtc?currency='+this.form.currency+'&value='+this.form.price)
      .then(response => (this.response = response.data))
      }
    }
  },
};
</script>
