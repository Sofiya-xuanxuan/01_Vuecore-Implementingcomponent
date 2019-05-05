<template>
    <div class="kInput">
        <input :type="type" :value="value" @input="onInput">
    </div>
</template>

<script>
    export default {
        name: "KInput",
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
            onInput(e) {
                //通知老爹发生了input事件——这个事件名是不能更改的，因为是语法糖
                this.$emit('input',e.target.value)
            }
        },
    }
</script>

<style scoped>

</style>