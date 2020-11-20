<template>
  <div>
    <Button
      :isloading="isloading"
      :click="clickBtn"
    >
      关注我
    </Button>
  </div>
</template>

<script>
import MavonEditor from '@comp/MavonEditor/';
import Button from '@comp/Button/';

export default {
    components:{
      MavonEditor,
      Button
    },
    data(){
      return{
        isloading:false
      };
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