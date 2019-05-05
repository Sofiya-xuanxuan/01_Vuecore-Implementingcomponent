import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import './plugins/element.js'


Vue.config.productionTip = false
Vue.prototype.$bus=new Vue();
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
