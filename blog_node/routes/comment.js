var express = require('express');
var router = express.Router();

/**
 * @author: 侠岚
 * @description: 获取文章的评论列表
 * @param {number} article_id 
 * @returns: 
 * @Date: 2020-08-07 14:50:51
 */
router.get('/1', function(req, res, next) {

  
  console.log(111)
  // res.render('index', { title: 'Express' });
});

module.exports = router;
