<template>
    <div id="Detail">
        <h2>商品详情</h2>
        <!--参数获取-->
        <p>{{$route.params.id}}</p>
        <p>{{id}}</p>
    </div>
</template>

<script>
    export default {
        name: "Detail",
        props:['id']
    }
</script>

<style scoped>

</style>