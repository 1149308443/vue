<template>
  <div class="anthor cardBox">
    <div class="pic">
      <img
        src="https://ziyi2.github.io/images/avatar.jpeg"
        alt=""
      >
      <p class="name">吴维兴</p>
      <p class="signature">人生一世,草木一秋</p>
      <p class="address">上海浦东新区</p>
    </div>
    <div class="countAll">
      <div class="countDetial">
        <div class="article">
          <p>文章</p>
          <p>6</p>
        </div>
        <div class="type">
          <p>分类</p>
          <p>6</p>
        </div>
        <div class="tag">
          <p>标签</p>
          <p>19</p>
        </div>
      </div>
      <a
        href="https://github.com/1149308443"
        class="attention"
      >关注我</a>
    </div>
  </div>
</template>

<script>
export default {
    name:'Anthor'
};
</script>

<style lang="less" scoped>
.anthor{
    .pic{
        text-align: center;
        img{
            width: 128px;
        }
        p{
            line-height: 25px;
        }
        .name{
            color: #4a4a4a;
            font-weight: 400;
        }
        .signature{
            font-size: 13px;
        }
        .address{
            font-size: 13px;
            color: #7a7a7a;
        }
    }
    .countDetial{
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        p{
            line-height: 25px;
            text-align: center;
            &:first-child{
                font-size: 13px;
            }
            &:nth-child(2){
            font-size: 20px;
            font-weight: 500;
            }
        }
    }
    .attention{
        display: block;
        line-height: 30px;
        background-color:#3273dc;
        cursor: pointer;
        color: #fff;
        text-decoration: none;
        text-align: center;
        margin-top: 10px;
        border-radius: 20px;
        &:hover{
          background: blue;
        }
    }
}
</style>