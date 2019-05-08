//node.js代码
//所以导出方式不一样
module.exports={
    publicPath:'/kcart',//解决history模式遇到的路由问题
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
                            {id:1,text:'百万年薪架构师',price:10000},
                        ]
                    })
                })
            }
        }
    }
}

