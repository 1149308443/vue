<template>
  <div class="LayoutHeader">
    <div class="headerBox">
      <div class="logo">
        <img
          src="/static/logo.png"
          alt=""
        >
      </div>
      <div class="nav">
        <div class="navLeft">
          <span>主页</span>
          <span>归档</span>
          <span>分类</span>
          <span>标签</span>
        </div>
        <div class="navRight">
          写文章<Icon class="fa-book fa-fw" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../style.less';
import Icon from '@comp/Icon/index.vue';
export default {
    name:'LayoutHeader',
    components:{
      Icon
    }
};
</script>