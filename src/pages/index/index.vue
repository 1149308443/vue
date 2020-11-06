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
  </div>
</template>

<script>
// import style from "./style.less";
import  "./style.less";
export default {
    name: 'App',
    data(){
        return {
          msg: 'Welcome to Your Vue.js',
          // styles: style
        }
    },
    created(){
        
    },
    methods: {
        
    }
}
</script>
