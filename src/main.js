// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './style/init.css'
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import xhr from './axios/axios'
import store from './vuex/index'
// import { Swipe, SwipeItem } from 'vant';
// Vue.use(Swipe).use(SwipeItem);


Vue.use(Vant)
Vue.prototype.$axios=xhr

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
