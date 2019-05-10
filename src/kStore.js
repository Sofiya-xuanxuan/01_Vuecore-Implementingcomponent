import Vue from 'vue';

class kStore {
    constructor(options){
        this.state=options.state;
        this.getters=options.getters;
        this.mutations=options.mutations;
        this.actions=options.actions;
        this.vm=new Vue({
            data:{
                state:this.state
            }
        })
    }
    commit(type,payload){
        const mutation=this.mutations[type];//取到mutations中的方法
        mutation(this.state,payload)//调用
    }
    dispatch(type,payload) {
        const actions = this.actions[type];
        const context = {
            commit: this.commit.bind(this),
            state: this.state,//还可以传别的
            dispatch:this.dispatch.bind(this)
        }
        return actions(context, payload)//需要return出去，dispatch后要使用回调函数
    }
}
export default new kStore({
    state:{
        count:99
    },
    mutations:{
        add(state,payload){
            state.count+=payload;
        }
    },
    actions:{
        fn(context,payload){

        }
    }
});