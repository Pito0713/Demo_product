import Vue from 'vue'
import App from './index.vue'
import vueResource from 'vue-resource'
import $ from 'jquery'
Vue.prototype.$ = $
Vue.use(require('vue-moment'))
Vue.use(vueResource)
Vue.config.productionTip = false

new Vue({

  render: h => h(App)
}).$mount('#app')
