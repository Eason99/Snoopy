// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'iview/dist/styles/iview.css'
import Iview from 'iview'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import echarts from 'echarts'
import 'echarts/map/js/china'

Vue.config.productionTip = false
Vue.use(Iview)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.prototype.$echarts=echarts


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Iview,
  components: { App },
  template: '<App/>'
})
