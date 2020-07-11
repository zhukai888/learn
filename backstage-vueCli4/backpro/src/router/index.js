/*
 * @Description: 
 * @Author: 朱凯凯（1965581681@qq.com）
 * @Date: 2020-06-15 17:35:03
 */

import Vue from 'vue'
import Router from 'vue-router'
import config from './config'


// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)


export default new Router({
  routes: config
})