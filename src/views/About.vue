<template>
    <div id="about">
        <form-test></form-test>
    </div>
</template>

<script>
    import FormTest from '@/components/FormTest.vue';

    export default {
        name: "About",
        components: {FormTest},
        beforeRouteEnter(to,form,next) {
            console.log(to.path);
            //beforeRouteEnter 守卫 不能 访问 this，因为守卫在导航确认前被调用,因此即将登场的新组件还没被创建。
            //可以通过next()回调函数获得组件实例
            next(vm=>{
                console.log(vm);
            });
        }
    }
</script>

<style scoped>

</style>
