<template>
  <div>
    <Button
      :isloading="isloading"
      :click="clickBtn"
    >
      关注我
    </Button>
    <BackTop />
    <Loading />
  </div>
</template>

<script>
import Button from '@comp/Button/';
import BackTop from '@comp/BackTop/';
import Loading from '@comp/Loading/';

export default {
    components:{
      Button,
      BackTop,
      Loading
    },
    data(){
      return{
        isloading:false
      };
    },
    mounted(){
      // this.$message.show('message');
    },
    methods:{
      clickBtn:function(){
        // this.isloading = true;
        // const that = this;
        this.$message.show({
          message:'nihao',
          type:'success'
        });
        // setTimeout(function(){
        //   that.isloading = false;
        // },500);
      }
    }
};
</script>

<style scoped>

</style>