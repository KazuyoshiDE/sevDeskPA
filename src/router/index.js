import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Dashboard.vue'
import BitcoinDetails from '../views/BitcoinDetails.vue'
import BitcoinConverter from '../views/BitcoinConverter.vue'
import BitcoinChart from '../views/BitcoinChart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Home,
    meta: { title: 'Dashboard' }
  },
  {
    path: '/bitcoin-details',
    name: 'Bitcoin Details',
    component: BitcoinDetails,
    meta: { title: 'Bitcoin Details' }
  },
  {
    path: '/bitcoin-converter',
    name: 'Bitcoin Umrechner',
    component: BitcoinConverter,
    meta: { title: 'Bitcoin Umrechner' }
  },
  {
    path: '/bitcoin-chart',
    name: 'Bitcoin Diagramm',
    component: BitcoinChart,
    meta: { title: 'Bitcoin Diagramm' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
