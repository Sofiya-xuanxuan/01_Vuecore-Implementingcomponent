import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const cart={
  state:{
    list:JSON.parse(localStorage.getItem("cart")) || []//从本地中取出cart数据
  },
  mutations:{
    addCart(state,good){
      const ret = state.list.find(c => c.id === good.id);
      if (ret) {
        ret.count += 1;
      } else {
        state.list.push({
          ...good,
          count: 1,
          active: true
        })
      }
      localStorage.setItem('cart', JSON.stringify(state.list))//数据更改后，存储到localStorage中
    }
  }
}
export default new Vuex.Store({
  //存储的状态
  state: {
    isLogin:false
  },
  //根据state中的数据衍生出一些东西
  getters:{
    loginState(state){
      return state.isLogin?'欢迎回来':'游客'
    }
  },
  //状态变更——能改状态的只有mutation
  mutations: {
    login(state){
      state.isLogin=true;
    }
  },
  actions: {//异步的事件都在actions中处理，action中不能做状态更新，能改状态的只有mutation，所以在action中是提交一个mutation
    //context可以直接解构{commit}，下面则可以直接使用commit('login')
    requestLogin(context,payload) {
      return new Promise(resolve=>{
        setTimeout(()=>{
          context.commit('login')//成功之后要
        },2000)
        resolve(true);//要执行回调函数，告诉外边，这边commit完了
      })
    }
  },
  modules:{
    cart
  }
})
