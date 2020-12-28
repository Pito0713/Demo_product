import Vue from 'vue'
import App from './productSingle.vue'
import vueResource from 'vue-resource'
import $ from 'jquery'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.prototype.$ = $
Vue.use(require('vue-moment'))
Vue.use(vueResource)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
