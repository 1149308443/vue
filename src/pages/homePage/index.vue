<template>
  <Layout>
    <div class="HomePageContainer">
      <div class="left">
        <Anthor />
        <div class="cardBox menu">
          <div class="title">分类</div>
          <ul>
            <li><span>前端</span> <span>2</span></li>
            <li><span>旅行</span> <span>2</span></li>
            <li><span>随笔</span> <span>2</span></li>
            <li><span>计划</span> <span>2</span></li>
          </ul>
        </div>

        <div class="cardBox menu">
          <div class="title">标签</div>
          <div class="tag">
            <span>JavaScript</span>
            <span>React</span>
            <span>Redux</span>
            <span>Vue</span>
            <span>Css</span>
            <span>React-native</span>
            <span>webpack</span>
            <span>nodeJs</span>
          </div>
        </div>
      </div>
      <div class="center">
        <Article />
      </div>
      <div class="right">
        <div class="cardBox menu">
          <div class="title">最热文章</div>
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
        </div>
        <div class="cardBox menu">
          <div class="title">归档</div>
          <ul>
            <li><span>2020年11月</span> <span>2</span></li>
            <li><span>2020年10月</span> <span>2</span></li>
            <li><span>2020年9月</span> <span>2</span></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '../layout/';
import Anthor from './components/anthor';
import Article from './components/article';
import './style.less';

export default {
    name:'HomePage',
    components: {
      Layout,
      Anthor,
      Article,
    },
    data(){
        return{

        };
    },
    created(){
      // document.title = '首页';
    }
};
</script>