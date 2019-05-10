import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import './plugins/element.js'
import router from './router'
import store from './store'


Vue.config.productionTip = false
Vue.prototype.$bus=new Vue();
Vue.prototype.$axios = axios

new Vue({
  //router挂载，为什么呢？稍后解答
  router,
  store,//意味着所有组件都可以使用$store了
  render: h => h(App)//等同于：render:function(h) {return h(App)}
}).$mount('#app')
