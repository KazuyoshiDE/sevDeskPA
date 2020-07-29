import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'

window.$ = require('jquery')
window.JQuery = require('jquery')

window.axios = require('axios');

Vue.config.productionTip = false

new Vue({
  router,
  axios,
  render: h => h(App)
}).$mount('#app')
