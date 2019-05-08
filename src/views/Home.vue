<template>
  <div id="Home">
    <router-link to="/">List</router-link> |
    <router-link to="/cart">Cart</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {

      }
    },
    created() {

    },
    methods: {

    }
  }
</script>

<style>

</style>