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
        <button class="btn convert-btn" type="submit">Umrechnen</button>
      </form>
      <div v-if="converted" class="converted">
        <h4>Umgerechnet:</h4>
        <h4 class="converted-value">{{ converted }}</h4>
      </div>
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

      converted: null,
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
      .then(response => (this.converted = response.data))
      }
    }
  },

  mounted() {
    M.AutoInit();
  }
};
</script>

<style lang="scss">
.bitcoin-details {
  .convert-btn {
    margin-top: 25px;
    font-size: 18px;
    background-color: #673ab7;
    transition: background-color 0.3s ease-in;

    &:hover {
      background-color: #7e57c2;
    }
  }

  .select-wrapper {
    .select-dropdown {
      &:focus {
        border-bottom: 1px solid #673ab7;
      }

      span {
        color: #673ab7;
      }
    }
  }

  label {
    font-size: 16px;
  }

  input[type="number"] {
    &:not(.browser-default) {
      &:focus:not([readonly]) {
        border-bottom: 1px solid #673ab7;
        box-shadow: 0 1px 0 0 #673ab7;
      }
    }
  }

  h4 {
    font-weight: 800;
  }

  .converted {
    .converted-value {
      margin-top: 0;
    }
  }
}
</style>
