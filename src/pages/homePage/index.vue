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
        <!-- nav导航头 -->
        <div class="cardBox centerNav">
          <span>分类</span>
          <span>前端</span>
        </div>

        <!-- 正常主页展示 -->
        <!-- <Article /> -->

        <!-- 归档 -->
        <!-- <div class="cardBox menu">
          <div class="title">归档</div>
          <ul>
            <li><span>2020年11月</span> <span>2</span></li>
            <li><span>2020年10月</span> <span>2</span></li>
            <li><span>2020年9月</span> <span>2</span></li>
          </ul>
        </div> -->

        <!-- 分类 -->
        <!-- <div class="cardBox menu">
          <div class="title">分类</div>
          <ul>
            <li><span>前端</span> <span>2</span></li>
            <li><span>旅行</span> <span>2</span></li>
            <li><span>随笔</span> <span>2</span></li>
            <li><span>计划</span> <span>2</span></li>
          </ul>
        </div> -->

        <!-- 标签 -->
        <!-- <div class="cardBox menu">
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
        </div> -->

        <!-- 列表轴 -->
      </div>
      <div class="right">
        <div class="cardBox menu">
          <div class="title">最热文章</div>
          <Card />
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
  </Layout>
</template>

<script>
import Layout from '../layout/';
import Anthor from './components/anthor';
import Article from './components/article';
import Card from './components/card';
import './style.less';

export default {
    name:'HomePage',
    components: {
      Layout,
      Anthor,
      Article,
      Card
    },
    data(){
        return{

        };
    },
    created(){
      // document.title = '首页';
      console.log(this.$store.state);
      const { commit } = this.$store;
      commit('increment');
    }
};
</script>