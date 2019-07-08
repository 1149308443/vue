import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';

import './common.scss';

new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
})