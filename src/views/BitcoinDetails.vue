<template>
  <div class="bitcoin-details">
    <h3>Bitcoin Details</h3>
    <div class="details__wrapper">
      <span>Marktkapitalisierung: {{ marketcap }}</span>
      <span>Anzahl aller Bitcoins im Umlauf: {{ totalbc }}</span>
      <span>Anzahl der Transaktionen in den letzten 24h: {{ twentyfourhrtransactioncount }}</span>
      <span>Anzahl gesendeter Bitcoin in den letzten 24h: {{ twentyfourhrbtcsent }}</span>
      <span>Aktuelle Hashrate: {{ hashrate }}</span>
      <span>Aktueller Schwierigkeitsgrad: {{ getdifficulty }}</span>
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
}
</style>
