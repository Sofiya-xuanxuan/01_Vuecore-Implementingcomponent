import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import './plugins/element.js'
import router from './router'


Vue.config.productionTip = false
Vue.prototype.$bus=new Vue();
Vue.prototype.$axios = axios

new Vue({
  router,//router挂载，为什么呢？稍后解答
  render: h => h(App)
}).$mount('#app')
