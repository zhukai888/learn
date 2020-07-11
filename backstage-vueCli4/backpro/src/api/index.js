/*
 * @Description: 
 * @Author: 朱凯凯（1965581681@qq.com）
 * @Date: 2020-06-15 17:44:46
 */
import {
  get,
  post
} from './apiConfig'

export default {
  //获取邀请记录
  getInvit: parm => post('Invitation/bs_inviter_list', parm),

  //订单结算列表
  getOrderSettle: parm => post('StatementInfo/get_statement_info_list', parm),

  //提现管理列表
  getwithdraw: parm => post('DrawCashOrder/get_draw_cash_order_list', parm),

  //接受/拒绝提现
  acceptWithDraw: parm => post('DrawCashOrder/deal_draw_cash_order', parm),

  //获取提现详情
  getWithDraw: parm => post('DrawCashOrder/get_draw_cash_order_detail', parm),

  //获取路由
  getRouter: parm => get('/a', parm)
}