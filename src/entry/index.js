import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';

import './common.less';

new Vue({
  router,
  store,
  el: '#app',
  components: { App },
  template: '<App/>'
});