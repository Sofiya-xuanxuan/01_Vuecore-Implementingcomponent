<template>
    <div id="app">
        <div class="cart">
            <h1>开课吧购物车</h1>
            <!--课程列表-->
            <ul>
                <li v-for="item in goods" :ket="item.id">
                    <span class="margin_left">{{item.id}}</span>
                    <span class="margin_left">{{item.text}}</span>
                    <span class="margin_left">￥{{item.price}}</span>
                    <button @click="addCart(item)">加入购物车</button>
                </li>
            </ul>
            <!--购物车-->
            <cart name="开课吧购物车"></cart>

            <!--实现form-->
            <form-test></form-test>
        </div>
    </div>
</template>

<script>
    import Cart from './components/Cart.vue'
    import FormTest from './components/FormTest.vue';
    export default {
        name: 'app',
        components: {Cart,FormTest},
        data() {
            return {
                dataList: [],
                goods: []
            }
        },
        async created() {
            try {
                const res = await this.$axios.get('/api/goods');
                this.goods = res.data.data;
            } catch (error) {
                //错误处理
            }
        },
        methods: {
            addCart(good) {
                this.$bus.$emit('addCart',good);
            }
        },
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
