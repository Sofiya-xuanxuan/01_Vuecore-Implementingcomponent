import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import List from './views/List.vue'
import Cart from './views/Cart.vue'
import Detail from './views/Detail.vue'

Vue.use(Router)

const router = new Router({
    //模式：默认有2中模式：history——用户友好，搜索引擎友好
    //hash模式——前端路由，#之后的
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/', name: 'home', component: Home,
            children: [
                {path: '', component: List},//path空表示是默认子路由
                {path: '/cart', component: Cart},
                {path: '/detail/:id', component: Detail, props: true}//:id参数占位符  设置props:true，为了让组件获取参数
            ]
            //要注意，子路由中以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。
        },
        {path: '/login', name: 'login', component: Login},
        {
            path: '/about', name: 'about',
            meta:{requireLogin:true},
            //路由独享守卫
            beforeEnter(to, from, next) {
                //判断是否登录
                if (!window.isLogin) {//未登录
                    //next({name:'login',query:{redirect:to.path}})//等同于下面
                    next('/login?redirect=' + to.path)//登录成功后要重定向，将重定向的地址放在路由上，一会儿登录页要拿出来重定向
                } else {
                    next();//放行
                }
            },
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
//路由守卫
//每次路由激活之前都会执行回调函数
//全局路由
router.beforeEach((to, from, next) => {
    //to.meta：取到to.meta的值，来知道哪些路由需要守卫
    //判断是否登录
    if (to.meta || !window.isLogin) {//未登录
        //next({name:'login',query:{redirect:to.path}})//等同于下面
        next('/login?redirect=' + to.path)//登录成功后要重定向，将重定向的地址放在路由上，一会儿登录页要拿出来重定向
    } else {
        next();//放行
    }
});

export default router;
