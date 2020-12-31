import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import Message from '@comp/Message/message';
import Loading from '@comp/Loading/loading';

import './common.less';

Vue.use(Message);
Vue.use(Loading);
new Vue({
  router,
  store,
  el: '#app',
  components: { App },
  template: '<App/>'
});