<template>
  <div>
    <h1>{{ msg }}</h1>
    <input type="text" v-model="msg" />
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </div>
</template>

<script>
export default {
    name: 'app',
    data(){
        return {
        msg: 'Welcome to Your Vue.js'
        }
    },
    created(){
        
    },
    methods: {
        
    }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;

  h1 {
    color: green;
  }
}
</style>