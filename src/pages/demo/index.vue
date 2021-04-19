<template>
  <!-- <div  v-bind:class="[styles['indexContainer']]"> -->
  <div class="indexContainer">
    <h1>{{ msg }}</h1>
    <input
      v-model="msg"
      type="text"
    >
    <router-link to="/foo">
      Go to Foo
    </router-link>
    <router-link to="/bar">
      Go to Bar
    </router-link>

    <div class="wrap-box">
      <rectangle-marker
        v-model="mockData"
        :imgUrl="imgUrl"
      />
    </div>
  </div>
</template>

<script>
import RectangleMarker from '@comp/rectangleMarker';
// import style from "./style.less";
import  "./style.less";
export default {
    name: 'App',
    components:{
      RectangleMarker
    },
    data(){
        return {
          msg: 'Welcome to Your Vue.js',
          // styles: style
          imgUrl: 'https://img95.699pic.com/photo/50167/3219.jpg_wh860.jpg!/both/590x400',
          mockData: [],
        };
    },
    created(){
        // vue实例被创建之后执行 this指向vue实例
        console.log(this.msg);
    },
    methods: {
        
    }
};
</script>
