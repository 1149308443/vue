import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import message from '@comp/Message/message';

import './common.less';

Vue.use(message);
new Vue({
  router,
  store,
  el: '#app',
  components: { App },
  template: '<App/>'
});