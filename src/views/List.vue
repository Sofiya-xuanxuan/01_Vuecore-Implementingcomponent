<template>
    <div id="List">
        <!--课程列表-->
        <ul v-if="!childShow">
            <li v-for="item in goods" :key="item.id">
                <router-link :to="`/home/list/detail/${item.id}`">
                    <span class="margin_left">{{item.id}}</span>
                    <span class="margin_left">{{item.text}}</span>
                    <span class="margin_left">￥{{item.price}}</span>
                    <button @click.prevent.stop="addCart(item)">加入购物车</button>
                </router-link>

            </li>
        </ul>
        <router-view v-else></router-view>
    </div>
</template>

<script>
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
            //添加购物车
            addCart(good) {
                this.$bus.$emit('addCart',good);
            }
        },
        watch:{
            '$route'(to,from){
                if (from.path.split('/').length > 2 ) {
                    this.childShow = true;
                } else  {
                    this.childShow = false;
                }
            }
        }
    }
</script>

<style scoped>

</style>