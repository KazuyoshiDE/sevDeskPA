import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import chart from 'chart.js'

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'

window.axios = require('axios');

Vue.config.productionTip = false

new Vue({
  router,
  axios,
  render: h => h(App)
}).$mount('#app')
