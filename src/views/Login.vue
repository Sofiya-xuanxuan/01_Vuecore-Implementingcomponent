<template>
    <div id="Login">
        <h2>用户登录</h2>
        <button @click="onLogin" :disabled="loading">{{loading?'登录中...':'登录'}}</button>
    </div>
</template>

<script>
    import {mapActions,mapMutations} from 'vuex';
    export default {
        name: "Login",
        data() {
            return {
                loading: false
            }
        },
        methods: {
            ...mapActions(["requestLogin"]),
            ...mapMutations(["login"]),
            onLogin() {
                //登录成功后，可以去更改isLogin的值
                //提交mutation
                //this.$store.commit('login')//调取mutation中的login方法,等同于下面
                //this.login();
                //派发action
                this.loading=true;
                //this.$store.dispatch('requestLogin')等同于this.requestLogin()
                //可以传参
                this.requestLogin({username:'tom'}).then(isLoging=>{
                    if(isLoging) {
                        this.loading=false;
                        console.log(this.loading+'loading');
                        //这边同步重定向是不行的，因为派发后是异步的，需要等结果，直接重定向的话，发现isLogin还是false，所以就重定向不过去
                        //获取查询参(?之后的被称为查询参)
                        const redirect=this.$route.query.redirect||'/';
                        //路由重定向
                        this.$router.push(redirect);
                    }
                });
            }
        },
    }
</script>

<style scoped>

</style>