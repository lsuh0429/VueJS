import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'chart.js'
import 'hchs-vue-charts'
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'

Vue.config.productionTip = false

Vue.use(window.VueCharts)
Vue.use(VueChartkick, { Chartkick })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
