<template>
  <div
    :class="['messagaContainer', classname?'default':'',type ? type:'' ]"
    v-html="message"
  />
</template>

<script>
export default {
    name:'Message',
    props:{
        message: {
            type:String,
            default:'请稍后再试'
        },
        type: {// 消息类型 info  error  success  warning
            type: String,
            default: 'info'
        }
    },
    data(){
        return{
            classname:false
        };
    },
    mounted(){
        const that = this;
        setTimeout(function(){
            that.classname = true;
        },1000);
        // setTimeout(function(){
        //     that.classname = false;
        // },2000);
    },
    methods:{

    }
};
</script>

<style lang="less" scoped>
    .messagaContainer{
        position: fixed;
        z-index: -1;
        top: 0px;
        left: 50%;
        padding: 10px 20px;
        border:1px solid #EBEEF5;
        background-color: #edf2fc;
        transform: translateX(-50%);
        border-radius: 4px;
        color: #909399;
        opacity: 0;
        
        &.default{
            border-color: #EBEEF5;
            background-color: #edf2fc;
            opacity: 1;
            top: 30px;
            z-index: 100;
            transition: opacity .3s,transform .4s,top .4s,-webkit-transform .4s;
        }
    }
</style>