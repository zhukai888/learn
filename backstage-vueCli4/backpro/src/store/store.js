/*
 * @Description:  vuex管理器
 * @Author: 朱凯凯（1965581681@qq.com）
 * @Date: 2020-05-25 11:38:16
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    slideShow: false, //左侧栏展开
    routeTags: JSON.parse(sessionStorage.getItem("routeTags")) || [{
      path: '/',
      name: '首页',
      colseFlag:true
    }] //路由缓存标签
  },

  getters: {},

  mutations: {
    /**
     * @author: 朱凯凯（1965581681@qq.com）
     * @description: 提交路由标签
     * @param {type} 
     * @returns: 
     * @Date: 2020-07-03 14:54:13
     */
    plusRouterTag(state, route) {
      state.routeTags.push(route)
    },

    /**
     * @author: 朱凯凯（1965581681@qq.com）
     * @description: 减少路由标签
     * @param {type} 
     * @returns: 
     * @Date: 2020-07-03 14:55:48
     */
    reduceRouteTag(state, index) {
      state.routeTags.splice(index, 1)
    },

    /**
     * @author: 朱凯凯（1965581681@qq.com）
     * @description: 改变侧边栏的显示状态
     * @param {type} 
     * @returns: 
     * @Date: 2020-07-03 09:16:51
     */
    changeSlideShow(state) {
      state.slideShow = !state.slideShow
    }
  },

  actions: {}
})