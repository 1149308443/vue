<template>
  <div>
    <Button
      :isloading="isloading"
      :click="clickBtn"
    >
      关注我
    </Button>
    <BackTop />
    <div
      v-loading="show"
      v-loading.fullscreen="full"
      v-loading.text="text"
      class="loadingBox"
      :fullscreen="show"
    />

    <ShowMore />
  </div>
</template>

<script>
import Button from '@comp/Button/';
import BackTop from '@comp/BackTop/';
import ShowMore from './showMore/';

export default {
    components:{
      Button,
      BackTop,
      ShowMore
    },
    data(){
      return{
        isloading: false,
        show: false,
        text:'请稍后...',
        full: false
      };
    },
    mounted(){
      // this.$message.show('message');
    },
    methods:{
      clickBtn:function(){
        // 按钮loading状态
        // this.isloading = true;
        const that = this;
        // setTimeout(function(){
        //   that.isloading = false;
        // },500);

        // 全局message提示
        // this.$message.show({
        //   message:'nihao',
        //   type:'success'
        // });

        // 全局遮罩loading
        this.show = true;
        // this.$loading.show();
        setTimeout(function(){
          that.show = false;
          // that.$loading.hide();
        },1500);
      }
    }
};
</script>

<style scoped>
  .loadingBox{
    width: 200px;
    height: 150px;
    background-color: skyblue;
  }
</style>