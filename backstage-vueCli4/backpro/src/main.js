/*
 * @Description: 
 * @Author: 朱凯凯（1965581681@qq.com）
 * @Date: 2020-06-30 11:22:24
 */ 

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/store'
import api from './api/index'

//阻止启动生产消息
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$api = api;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')