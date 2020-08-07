var express = require('express');
var router = express.Router();

// 引入sql 连接池
const db = require('../../config/DBPool');
// 引入 sql 语句常量
const sql = require('./userSql')

/**
 * @author: 侠岚
 * @description: 查询单个 user
 * @param {number} id 用户id
 * @returns: array 
 * @Date: 2020-08-07 15:25:15
 */
router.get('/:id/', (req, res, next) => {
  db.queryArgs(sql.SELECT_SINGLE, [req.params.id], (data) => {
    res.send(data);
  })
});



/**
 * @author: 侠岚
 * @description: 查询账号密码
 * @param {type} 
 * @returns: array 
 * @Date: 2020-08-07 15:25:15
 */
router.get('/queryNum/:account_num/:psw/', (req, res, next) => {
  db.queryArgs(sql.SELECT_ACCOUNT_NUM, [req.params.account_num, req.params.psw], (data) => {
    res.send({
      code: 1,
      flag: data.length === 1 ? true : false
    })
  })
});


/**
 * @author: 侠岚
 * @description: 注册账号
 * @param {params} 
 * @returns: array 
 * @Date: 2020-08-07 15:25:15
 */
router.post('/register', (req, res, next) => {
  console.log(req.body)
  // db.query(sql.SELECT_ACCOUNT_NUM, [req.params.account_num, req], (data) => {

  // })
});




module.exports = router;