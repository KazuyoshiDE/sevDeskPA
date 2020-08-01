
<template>
  <div>
    <!--<canvas id="line-chart"></canvas>-->
  </div>
</template>

<script>
    export default {
      response: 'test',

        mounted() {
          axios
            .get('https://api.blockchain.info/charts/market-price')
            .then(response => (this.response = response))

          /*new Chart(document.getElementById('line-chart'), {
            type: 'line',
            data: {
              labels: [''],
              datasets: [
                {
                  label: '',
                  data: ['']
                }
              ]
            }
         });*/
        }
    }
</script>
