<template>
  <div class="KFormItem">
      <label v-if="label">{{label}}</label>
      <!--插槽-->
      <slot></slot>
      <!--校验错误信息显示-->
      <p v-if="errorMessage" class="error">{{errorMessage}}</p>
  </div>
</template>

<script>
    import Validator from 'async-validator';//引入校验的插件
    export default {
        name: "KFormItem",
        inject:['form'],
        props: ["label","prop"],
        data() {
            return {
                errorMessage: ''
            }
        },
        created(){
            this.$on('validate',this.validate)
        },
        methods: {
            validate() {
              return new Promise(resolve => {
                  //校验规则定制
                  const descriptor={[this.prop]:this.form.rules[this.prop]};
                  //创建校验器
                  const validator=new Validator(descriptor);
                  //执行校验
                  validator.validate(
                      {[this.prop]:this.form.model[this.prop]},//取到校验的内容
                      errors=>{
                          if(errors) {
                              this.errorMessage=errors[0].message;//取校验住的第1条即可
                              resolve(false);
                          }else {
                              this.errorMessage='';//置空
                              resolve(true);
                          }
                      }
                  )
              })
            }
        },
    }
</script>

<style scoped>
    .error {
        color: red;
    }
</style>