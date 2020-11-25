import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import  { mixinGlobal } from '@util/';

import './common.less';

Vue.use(mixinGlobal);
new Vue({
  router,
  store,
  el: '#app',
  components: { App },
  template: '<App/>'
});