<template>
    <div class="KForm">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "KForm",
        provide(){// provide返回对象可以跨层级传参给子孙
            return {
                form:this// 表单实例传递给后代
            }
        },
        props:{
            model:{
                type:Object,
                required:true
            },
            rules:{
                type: Object
            }
        },
        methods: {
            async validate(cb) {
                //执行表单中的所有校验项
                const tasks=this.$children.filter(item=>item.prop).map(item=>item.validate())//将所有的子的validate方法执行一遍
                //得到一个promise组成的数组（将formitem数组转换为validate()返回的promise数组）
                console.log(tasks);//[Promise, Promise]
                //tasks中只要有任意一个是false，则校验失败
                //Promise.all(并发)可以保证，promises数组中所有promise对象都达到resolve状态，才执行then回调。
                const results=await Promise.all(tasks);
                console.log(results);// [false, false]
                if(results.some(valid=>!valid)) {
                    //检验失败
                    cb(false)
                }else{
                    //检验成功
                    cb(true)
                }
            }
        },
    }
</script>

<style scoped>

</style>