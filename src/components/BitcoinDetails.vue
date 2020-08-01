<template>
  <div class="details__wrapper">
    <div class="detail__wrapper">
      <span class="detail__description">Marktkapitalisierung</span>
      <span class="detail__value">{{ marketcap }}</span>
    </div>
    <div class="detail__wrapper">
      <span class="detail__description">Anzahl aller Bitcoins im Umlauf</span>
      <span class="detail__value">{{ totalbc }}</span>
    </div>
    <div class="detail__wrapper">
      <span class="detail__description">Anzahl der Transaktionen in den letzten 24h</span>
      <span class="detail__value">{{ twentyfourhrtransactioncount }}</span>
    </div>
    <div class="detail__wrapper">
      <span class="detail__description">Anzahl gesendeter Bitcoin in den letzten 24h</span>
      <span class="detail__value">{{ twentyfourhrbtcsent }}</span>
    </div>
    <div class="detail__wrapper">
      <span class="detail__description">Aktuelle Hashrate</span>
      <span class="detail__value">{{ hashrate }}</span>
    </div>
    <div class="detail__wrapper">
      <span class="detail__description">Aktueller Schwierigkeitsgrad</span>
      <span class="detail__value">{{ getdifficulty }}</span>
    </div>
  </div>
</template>

<script>
let marketcap = 'https://blockchain.info/q/marketcap';
let totalbc = 'https://blockchain.info/q/totalbc'
let twentyfourhrtransactioncount = 'https://blockchain.info/q/24hrtransactioncount'
let twentyfourhrbtcsent = 'https://blockchain.info/q/24hrbtcsent'
let hashrate = 'https://blockchain.info/q/hashrate'
let getdifficulty = 'https://blockchain.info/q/getdifficulty'

export default {
  data() {
    return {
      marketcap: null,
      totalbc: null,
      twentyfourhrtransactioncount: null,
      twentyfourhrbtcsent: null,
      hashrate: null,
      getdifficulty: null
    }
  },

  mounted () {
    const marketcapRequest = axios.get(marketcap)
    const totalbcRequest = axios.get(totalbc)
    const twentyfourhrtransactioncountRequest = axios.get(twentyfourhrtransactioncount)
    const twentyfourhrbtcsentRequest = axios.get(twentyfourhrbtcsent)
    const hashrateRequest = axios.get(hashrate)
    const getdifficultyRequest = axios.get(getdifficulty)

    axios.all([marketcapRequest, totalbcRequest, twentyfourhrtransactioncountRequest, twentyfourhrbtcsentRequest, hashrateRequest, getdifficultyRequest])
      .then(axios.spread((...responses) => {
        this.marketcap = responses[0].data
        this.totalbc = responses[1].data
        this.twentyfourhrtransactioncount = responses[2].data
        this.twentyfourhrbtcsent = responses[3].data
        this.hashrate = responses[4].data
        this.getdifficulty = responses[5].data
      })
    )},
}
</script>

<style lang="scss">
.details__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  font-size: 20px;

  .detail__wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      flex-direction: row;
      width: 600px;
    }

    .detail__description {
      font-weight: 800;
      text-align: left;
      width: 420px;
    }

    .detail__value {
      text-align: left;
    }
  }
}
</style>
