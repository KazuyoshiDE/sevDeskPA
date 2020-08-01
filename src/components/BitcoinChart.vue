
<template>
  <div class="chart__wrapper">
    <canvas id="line-chart"></canvas>
  </div>
</template>

<script>
    export default {
        mounted() {
          let data = [];
          let labels = [];
          let LINEDATA = [];

          axios
            .get('marketPrice.json') // TODO: Change get request to blockchain api
            .then((response) => {
              LINEDATA = {...response.data.values};
              data = Object.keys(LINEDATA).map(key => LINEDATA[key]);
              labels = Object.keys(LINEDATA)

              let lineChart = new Chart(document.getElementById('line-chart'), {
              type: 'line',
              data: {
                labels: labels,
                datasets: [
                  {
                    label: response.data.description,
                    data: data,
                    borderColor: "#673ab7",
                    pointRadius: 0,
                  }
                ]
              }
            }); 
          })
        }
    }
</script>

<style lang="scss">
.bitcoin-chart {
  min-height: 45vh;

  .chart__wrapper {
    padding: 25px;
  }
}
</style>
