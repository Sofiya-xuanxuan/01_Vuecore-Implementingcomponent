<template>
    <div class="FormTest">
        <h1>实现数据双向绑定</h1>
        <k-input type="text" v-model="someValue"></k-input><!--语法糖-->
        <k-input type="text" :value="someValue" @input="someValue=$event"></k-input>
        {{someValue}}

        <h1>element-form</h1>
        <el-form :model="loginForm" :rules="rules" ref="loginForm1" label-width="100px">
            <el-form-item label="用户名：" prop="username" class="inputWidth">
                <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password" class="inputWidth">
                <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm1')">登录</el-button>
            </el-form-item>
        </el-form>

        <h1>实现k-form组件</h1>
        <k-form :model="loginForm" :rules="rules" ref="loginForm2" label-width="100px">
            <k-form-item label="用户名：" prop="username">
                <div>
                    <k-input type="text" v-model="loginForm.username"></k-input>
                </div>
            </k-form-item>
            <k-form-item label="密码：" prop="password">
                <k-input type="password" v-model="loginForm.password"></k-input>
            </k-form-item>
            <k-form-item>
                <el-button type="primary" @click="submitForm2('loginForm2')">登录</el-button>
            </k-form-item>
        </k-form>
    </div>
</template>

<script>
    import KForm from './KForm.vue';
    import KFormItem from './KFormItem.vue';
    import KInput from './KInput.vue';


    export default {
        name: "FormTest",
        components: {KForm,KFormItem,KInput},
        data() {
            return {
                someValue: 'input默认值',
                loginForm:{
                    username:'',//用户名
                    password:''//密码
                },
                rules:{
                    username:[
                        {required:true,message:'请输入用户名',trigger:'change'}
                    ],
                    password:[
                        {required:true,message:'请输入密码',trigger:'blur'},
                        {validator:(rule,value,cb)=>{
                            cb(new Error())
                            },message:'密码输入错误'}
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('登录成功!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            submitForm2(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('登录成功!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        },
    }
</script>

<style scoped>
    .inputWidth {
        width: 300px;
        margin:30px auto;
    }
</style>