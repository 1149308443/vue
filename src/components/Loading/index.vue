<template>
  <div class="loadingContainer">
    <div class="inner">
      <Icon class="fa-spinner fa-pulse" />
      <div>加载中...</div>
    </div>
  </div>
</template>

<script>
import Icon from '@comp/Icon/';
export default {
    name:'Loading',
    components:{
        Icon
    }
};
</script>

<style lang="less" scoped>
.loadingContainer{
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.1);
    display: none;
    // background: transparent;
    &.show{
        display: block;
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