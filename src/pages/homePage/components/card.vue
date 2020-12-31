<template>
  <div class="smallArticle">
    <div class="avatar">
      <img
        src="https://www.bing.com/th?id=OHR.RedBlueWildebeest_ZH-CN1024893552_1920x1080.jpg"
        alt=""
        class="img"
      >
    </div>
    <div class="atInfo">
      <div class="time">2020-11-07 17:00</div>
      <div class="titleAt">http协议分析</div>
      <div class="type">前端</div>
    </div>
  </div>
</template>

<script>
export default {
    
};
</script>

<style lang="less" scoped>
.smallArticle{
    display: flex;
    flex-direction: row;
    .avatar{
        width: 75px;
        height: 75px;
        overflow: hidden;
        margin-right: 20px;
    }
    .atInfo{
        .time,.type{
            font-size: 12px;
            color: #7a7a7a;
        }
        .titleAt{
            margin: 8px 0;
        }
    }
}
</style>