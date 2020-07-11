/*
 * @Description: 
 * @Author: 朱凯凯（1965581681@qq.com）
 * @Date: 2020-07-03 10:42:53
 * @FilePath: \backpro\src\router\config.js
 */

import layout from '@/pages/index'

export default [{
    path: '/',
    component: layout,
    redirect: '',
    only: true, //只有一个子路由时，添加这个属性，可以不用添加name
    children: [{
      path: '',
      name: '首页',
      component: () => import("@/pages/homePage"),
    }]
  },

  {
    path: '/order',
    component: layout,
    redirect: '/order/orderSettle',
    name: '订单',
    children: [{
        path: 'orderSettle',
        name: '订单管理',
        component: () => import("@/pages/orderSettle")
      },
      {
        path: 'withdraw',
        name: '结算管理',
        component: () => import("@/pages/withdraw")
      }
    ]
  },
  {
    path: '/invitRecord',
    component: layout,
    redirect: '',
    only: true,
    children: [{
      path: '',
      name: '邀请记录',
      component: () => import("@/pages/invitRecord"),
    }]
  },

  {
    path: '/login',
    component: () => import("@/pages/special_page/login"),
    hidden: true  //不显示在侧边栏的路由加这个属性
  },

  {
    path: '/404',
    component: () => import("@/pages/special_page/404"),
    hidden: true
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]