<template>
    <div id="List">
        <!--课程列表-->
        <ul v-if="!childShow">
            <li v-for="item in goods" :key="item.id">
                <router-link :to="`/home/list/detail/${item.id}`">
                    <span class="margin_left">{{item.id}}</span>
                    <span class="margin_left">{{item.text}}</span>
                    <span class="margin_left">￥{{item.price}}</span>
                    <button @click.prevent.stop="onAddCart(item)">加入购物车</button>
                </router-link>
            </li>
        </ul>
        <router-view v-else></router-view>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';
    export default {
        name: "List",
        data() {
            return {
                goods: [],
                childShow:false
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
            ...mapMutations(['addCart']),
            //添加购物车
            onAddCart(good) {
                this.addCart(good);
                this.$router.push('/home/cart')
            }
        },
        watch:{
            '$route'(to, from) {//监听切换子页面
                if (to.path.split('/').length > 2 ) {
                    this.childShow = true;
                }
                if (from.path.split('/').length > 2 ) {
                    this.childShow = true;
                }
            }
        }
    }
</script>

<style scoped>

</style>