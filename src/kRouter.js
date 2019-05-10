import Vue from 'vue';
const routes=[
    {path:'/',name:login,component:Login}
]
class VueRouter{//根据hash来做的
    constructor(Vue,options){
        this.$options=options;
        this.routeMap={},//用于后面存储映射路由
        this.app=new Vue({
            data:{
                current:'#/'
            }
        })
    }
    //初始化 hashchange
    init(){
        window.addEventListener('load',this.onhashchange.bind(this),false)
        window.addEventListener('hashchange',this.onhashchange.bind(this),false)
    }
    //创建映射的路由
    createRouteMap(){
        this.$options.routes.forEach((item,index)=>{
            this.this.routeMap[item.path]=item.component
        })
    }
    //注册组件
    initComponent(Vue){
        //创建的全局组件
        Vue.component('router-link',{
            props:{
                to:String
            },
            //渲染
            render:function(h){
                // h <==> createElement——这是创建虚拟dom的方法
                // <a :href="to"><slot></slot></a>
                return h(
                    'a',
                    {attrs:{href:this.to}},
                    this.$slots.default
                )
            }
        })
        const _this=this;
        Vue.component('router-view',{
            render(h){
                var component=_this.routeMap[_this.app.current];
                return h(component)
            }
        })
    }
    getHash(){
        return window.location.hash.slice(1) || '/'
    }
    onhashchange(){
        this.app.current=this.getHash()//将当前的hash赋给current
    }
}
new VueRouter(Vue,{routes})//这边进行了解构，{routes}等同于{routes：routes}