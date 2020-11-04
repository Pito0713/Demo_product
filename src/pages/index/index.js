import Vue from 'vue'
import App from './index.vue'
Vue.use(require('vue-moment'))
Vue.config.productionTip = false

new Vue({

  render: h => h(App)
}).$mount('#app')
