<template>
  <div id="app">
    {{count}} <button @click="add">add</button>
    <div id="nav">
      <router-link to="/" v-if="!isLogin">Login</router-link>
      <span>{{loginState}}</span>|
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!--路由出口-->
    <router-view/>
  </div>
</template>
<script>
  import {mapState,mapGetters} from 'vuex';
  import kStore from './kStore';
  export default {
    methods: {
      add() {
        kStore.commit('add',5);
      }
    },
    computed:{
      ...mapState(['isLogin']),//等同于$store.state.isLogin
      ...mapGetters(['loginState']),//等同于$store.getters.loginState
      count(){
        return kStore.state.count
      }
    }
  }
</script>
<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .margin_left {
        margin-left: 20px;
    }
</style>
