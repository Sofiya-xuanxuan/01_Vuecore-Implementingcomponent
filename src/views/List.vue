<template>
    <div id="List">
        <!--课程列表-->
        <ul>
            <li v-for="item in goods" :ket="item.id">
                <router-link :to="`/detail/${item.id}`">
                    <span class="margin_left">{{item.id}}</span>
                    <span class="margin_left">{{item.text}}</span>
                    <span class="margin_left">￥{{item.price}}</span>
                    <button @click.prevent.stop="addCart(item)">加入购物车</button>
                </router-link>

            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "List",
        data() {
            return {
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

<style scoped>

</style>