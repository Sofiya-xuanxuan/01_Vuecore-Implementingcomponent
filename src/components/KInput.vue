<template>
    <div class="kInput">
        <input :type="type" :value="value" @input="onInput" @blur="onBlur" @change="onChange">
    </div>
</template>

<script>
    import Emitter from '@/service/util.js';

    export default {
        name: "KInput",
        mixins:[Emitter],
        props:{
            type:{
                type: String,
                default: 'text'
            },
            value:{
                type: String,
                default: ''
            }
        },
        methods: {
            //不同事件的触发方式：如：input、blur等
            onInput(e) {
                //通知老爹发生了input事件——这个事件名是不能更改的，因为是语法糖(自己派发自己监听)
                this.$emit('input',e.target.value);
                //派发事件的时候，要将事件类型传过去
                this.$parent.$emit('validate','change')//告诉监听的地方，这边之所以使用$parent来派发，是因为做校验的是form-item，而$parent就是form-item，所以相当于是form-item自己派发自己监听
                //dispatch使用——以防如果嵌套了多层div后，不能准确找到父组件
                this.dispatch('KFormItem','validate',e.target.value);
            },
            onChange(){
                this.$parent.$emit('validate','change')
            },
            onBlur(){
                this.$parent.$emit('validate','blur')
            }
        },
    }
</script>

<style scoped>

</style>