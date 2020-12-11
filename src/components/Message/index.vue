<template>
  <div
    :class="['messagaContainer', show ? 'show' : '', type ? type : '' ]"
  >
    <Icon
      v-if="type==='info'|| type === 'warning'"
      class="fa-exclamation-circle"
    />
    <Icon
      v-if="type==='success'"
      class="fa-check-circle"
    />
    <Icon
      v-if="type==='error'"
      class="fa-times-circle"
    />
    <span v-html="message" />
  </div>
</template>

<script>
import Icon from '@comp/Icon';
export default {
    name:'Message',
    components:{
        Icon
    },
    props:{
        show:{
            type:Boolean,
            default:false
        },
        message: {
            type:String,
            default:''
        },
        type: {// 消息类型 info  error  success  warning
            type: String,
            default: 'info'
        },
        duration:{
            type: Number,
            default: 2000
        }
    },
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
        opacity: 0;
        
        &.show{
            opacity: 1;
            top: 30px;
            z-index: 2000;
            transition: opacity .3s,transform .4s,top .4s,-webkit-transform .4s;
        }
        &.info{
            color: #909399;
            border-color: #EBEEF5;
            background-color: #edf2fc;
        }
        &.error{
            color:#f56c6c;
            background-color: #fef0f0;
            border-color: #fde2e2;
        }
        &.success{
            background-color: #f0f9eb;
            border-color: #e1f3d8;
            color:#67c23a
        }
        &.warning{
            color:#e6a23c;
            background-color: #fdf6ec;
            border-color: #faecd8
        }
    }
</style>