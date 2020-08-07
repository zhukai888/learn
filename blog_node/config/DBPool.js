//mysql连接池配置文件
var mysql = require('mysql');
var $dbConfig = require('../config/mysql');

// 使用连接池，避免开太多的线程，提升性能
var pool = mysql.createPool($dbConfig);

/**
 * 对query执行的结果自定义返回JSON结果
 */
function responseDoReturn(res, result, resultJSON) {
  if (typeof result === 'undefined') {
    res.json({
      code: '201',
      msg: 'failed to do'
    });
  } else {
    res.json(result);
  }
};

/**
 * 封装query之sql带不占位符func
 */
function query(sql, callback) {
  pool.getConnection(function (err, connection) {
    connection.query(sql, function (err, rows) {
      callback(err, JSON.parse(JSON.stringify(rows)));
      connection.release(); //释放链接
    });
  });
}

/**
 * 封装query之sql带占位符func
 */
function queryArgs(sql, args, callback) {
  pool.getConnection(function (err, connection) {
    if (err) {
      console.err('数据库链接错误');
    } else {
      connection.query(sql, args, function (err, rows) {
        if (err) {
          console.err(err)
        } else {
          callback(JSON.parse(JSON.stringify(rows)));
        }
        connection.release(); //释放链接
      });
    }

  });
}

//exports
module.exports = {
  query: query,
  queryArgs: queryArgs,
  doReturn: responseDoReturn
}