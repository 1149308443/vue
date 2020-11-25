<template>
  <div class="LayoutContainer">
    <Header />
    <div class="contentBox">
      <div class="innerContent">
        <slot />
      </div>
    </div>
    <BackTop />
    <Footer />
  </div>
</template>

<script>
import Header from './component/header';
import Footer from './component/footer';
import BackTop from '@comp/BackTop/';
import './style.less';
export default {
    name:'Layout',
    components:{
        Header,
        Footer,
        BackTop
    },
};
</script>