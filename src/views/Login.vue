<template>
    <div id="Login">
        <h2>用户登录</h2>
        <button @click="onLogin">登录</button>
    </div>
</template>

<script>
    export default {
        name: "Login",
        methods: {
            onLogin() {
                window.isLogin=true;//登录成功
                //获取查询参(?之后的被称为查询参)
                const redirect=this.$route.query.redirect||'/';
                //路由重定向
                this.$router.push(redirect);
            }
        },
    }
</script>

<style scoped>

</style>