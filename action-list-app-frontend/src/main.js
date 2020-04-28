import Vue from 'vue'
import App from './App.vue'
import router from './router'
import DateFilter from './filters/date'

Vue.config.productionTip = false
Vue.filter('date', DateFilter )

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
