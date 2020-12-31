<template>
  <div class="box">
    <div
      :class="['moreBox','moreLine']"
      v-html="text"
    />
    <span>展开</span>
  </div>
</template>

<script>
export default {
    name:"ShowMore",
    props:{
      text:{
        type: String,
        default: '这里有很多的内容这里有很多的内容这里有很多的内容这里有很多的内容这里有很多的内容这里有很多的内容这里有很多的内容这里有很多的内容这里有很多的内容这里有很多的内容这里有很多的内容这里有很多的内容'
      }
    },
    data(){
      return{
       
      };
    },
    created(){
      console.log(this.text);
    },
  };
</script>

<style lang="less" scoped>
.box{
  position: relative;
  width: 150px;
  span{
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
.moreBox{
  // width: 100%;
  width: 150px;
  overflow: hidden;
  &.oneLine{
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &.moreLine{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
}
</style>