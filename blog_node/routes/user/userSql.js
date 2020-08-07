/*
 * @Description: sql 语句统一管理
 * @Author: 侠岚
 * @Date: 2020-08-07 10:07:20
 * @FilePath: \blog_node\routes\user\sqlSentence.js
 */


const rtnField = 'id, account_num, nick_name, psw, headImg, create_time'

module.exports = {
  // 查询单个 user
  SELECT_SINGLE : `select ${rtnField} from user where id = ?`,

  // 查询账号 和 密码是否存在
  SELECT_ACCOUNT_NUM : `select ${rtnField} from user where account_num = ? and psw = ?`,
}