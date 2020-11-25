<template>
  <div>
    <Button
      :isloading="isloading"
      :click="clickBtn"
    >
      关注我
    </Button>
    <!-- <Message /> -->
    <BackTop />
  </div>
</template>

<script>
import Button from '@comp/Button/';
import BackTop from '@comp/BackTop/';
import Message from '@comp/Message/';

export default {
    components:{
      Button,
      BackTop,
      Message
    },
    data(){
      return{
        isloading:false
      };
    },
    mounted(){
      // console.log(1);
    },
    methods:{
      clickBtn:function(){
        this.isloading = true;
        const that = this;
        setTimeout(function(){
          that.isloading = false;
        },500);
      }
    }
};
</script>

<style scoped>

</style>