//node.js代码，不是浏览器端的代码
//所以导出方式不一样
//3.0的webpack的配置，都在这个文件中
module.exports={
    //解决history模式遇到的路由问题
    publicPath:'/kcart',//BASE_URL，不是路由的部分，路由匹配的是这个之后的，这个配置会直接影响后端的部署的配置。
    configureWebpack:{
        devServer:{
            before(app){
                //app是express的实例
                app.get('/api/goods',function(req,res) {
                    res.json({
                        code:0,
                        data:[
                            {id:1,text:'web全栈架构师',price:9000},
                            {id:2,text:'Python架构师',price:6000},
                            {id:3,text:'百万年薪架构师',price:10000},
                        ]
                    })
                })
            }
        }
    }
}

