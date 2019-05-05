<template>
    <div class="cart">
        <table :title="name" border="1">
            <thead>
            <tr>
                <th></th>
                <th>课程名</th>
                <th>单价</th>
                <th>数量</th>
                <th>价格</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="c in cart" :key="c.id" :class="{inactive:!c.active}">
                <td>
                    <input type="checkbox" v-model="c.active">
                </td>
                <td>{{c.text}}</td>
                <td>{{c.price}}</td>
                <td>{{c.count}}</td>
                <td>￥{{c.count * c.price}}</td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
                <td colspan="4" align="right">总计：</td>
                <td>￥{{total}}</td>
            </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Cart",
        props: {
            name: {
                type: String,
                default: '开课吧购物车'
            },
        },
        data() {
            return {
                cart: JSON.parse(localStorage.getItem("cart")) || []//从本地中取出cart数据
            }
        },
        created() {
            this.$bus.$on('addCart', (good) => {
                const ret = this.cart.find(c => c.id === good.id);
                if (ret) {
                    ret.count += 1;
                } else {
                    this.cart.push({
                        ...good,
                        count: 1,
                        active: true
                    })
                }
            })
        },
        methods: {
            add() {

            }
        },
        computed: {
            //计算总价
            total() {
                return this.cart.reduce((sum, c) => {
                    if (c.active) {
                        sum += c.count * c.price
                    }
                    return sum;
                }, 0)
            }
        },
        watch: {
            cart: {
                handler(newValue, oldValue) {
                    localStorage.setItem('cart', JSON.stringify(newValue))
                },
                deep: true//深层监听对象
            }
        }
    }
</script>

<style scoped>
    .inactive {
        color: gray;
    }
    table {
        margin: 0 auto;
    }
</style>