<template>
  <div class="cardBox articleBox">
    <div class="avatar">
      <img
        src="https://www.bing.com/th?id=OHR.RedBlueWildebeest_ZH-CN1024893552_1920x1080.jpg"
        alt=""
        class="img"
      >
    </div>
    <div class="article">
      <div class="articleInfo">
        <span><Icon class="fa-user-o" />吴维兴</span>
        <span><Icon class="fa-calendar-o" />2020-11-02 17:00</span>
        <span><Icon class="fa-eye" />1024</span>
      </div>
      <div class="title">http协议分析</div>
      <div class="content">
        Web是建立在HTTP(HyperText Transfer Protocol，超文本传输协议)上通信的。本文是一篇HTTP协议学习笔记，补充一下HTTP协议的基础，这对于理解Ajax以及前后端交互过程绝对是非常有帮助的，本文章主要讲述Web基础和简单的HTTP协议……
      </div>
      <div class="more">阅读更多</div>
    </div>
  </div>
</template>
<script>
import Icon from '@comp/Icon';

export default {
    name:'Article',
    components:{
        Icon
    }
};
</script>
<style lang="less" scoped>
.articleBox{
    padding: 0 !important;
    .avatar{
        width: 100%;
        height: 200px;
        overflow: hidden;
        
    }
    .article{
        padding: 20px;
        .articleInfo{
            font-size: 12px;
            color: rgb(153, 153, 153);
            span{
                padding: 0 8px;
                border-left: 1px solid rgb(153, 153, 153);
                &:first-child{
                    border: none;
                }
                i{
                    margin-right: 5px;
                }
            }
        }
        .title{
            color: #242424;
            font-size: 28px;
            font-weight: 500;
            margin: 10px 0;
        }
        .content{
            font-size: 13px;
            line-height: 20px;
            letter-spacing: 1px;
            margin-bottom: 10px;
        }
        .more{
            width: 80px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            background-color: whitesmoke;
            font-size: 12px;
            border-radius: 2px;
            cursor: pointer;
            &:hover{
                background-color: #ebebeb;
            }
        }
    }
}
</style>