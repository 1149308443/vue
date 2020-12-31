<template>
  <div :class="['loadingContainer',show ? 'show' : '', fullscreen ? 'fullscreen':'']">
    <div class="inner">
      <Icon class="fa-spinner fa-pulse" />
      <div v-html="text" />
    </div>
  </div>
</template>

<script>
import Icon from '@comp/Icon/';
export default {
    name:'Loading',
    components:{
        Icon
    },
    props:{
      show:{ //控制展示/隐藏
        type: Boolean,
        default: false
      },
      fullscreen:{ // 控制全屏
        type: Boolean,
        default: false
      },
      text:{
        type: String,
        default: '加载中...'
      }
    }
};
</script>

<style lang="less" scoped>
.loadingContainer{
    width: 100%;
    height: 100%;
    position: relative;
    background: rgba(255, 255, 255, 0.4);
    display: none;
    color: #409eff;
    // background: transparent;
    &.show{
        display: block;
    }
    &.fullscreen{
      width: 100vw;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
    }
    .inner{
        width: 100px;
        height: 100px;
        text-align: center;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
    }
}
</style>