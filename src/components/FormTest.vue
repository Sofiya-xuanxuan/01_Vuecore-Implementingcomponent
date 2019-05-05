<template>
    <div class="FormTest">
        <h1>实现数据双向绑定</h1>
        <k-input type="text" v-model="someValue"></k-input><!--语法糖-->
        <k-input type="text" :value="someValue" @input="someValue=$event"></k-input>{{someValue}}

        <h1>element-form</h1>


        <h1>实现k-form组件</h1>
    </div>
</template>

<script>
    import KInput from './KInput.vue';
    export default {
        name: "FormTest",
        components:{KInput},
        data() {
            return {
                someValue: 'input默认值'
            }
        },
    }
</script>

<style scoped>

</style>