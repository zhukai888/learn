let http = require('http')
let fs = require('fs')

let xx = require('./xx.module')


let serve = http.createServer()

let router = [{
  path: '/',
  title: "首页",
  index: "0"
},
{
  path: '/invitRecord',
  title: "邀请记录",
  index: "1"
},
{
  path: '/order',
  title: "订单",
  index: "2",
  children: [{
      path: '/withdraw',
      title: "提现管理",
    },
    {
      path: '/orderSettle',
      title: "订单管理",
    }
  ]
},

]


serve.on("request", (req, res) => {

  let resdata = {
    "code": 0,
    "data": router
  }

  if (req.url == '/a') {
    res.setHeader("Content-Type", "application/json;charset:utf-8");
    res.end(JSON.stringify(resdata));
  } else {
    // res.setHeader("Content-Type", "application/json;charset:utf-8");
    // res.end("error");
    fs.readFile('./404.html', function (err, data) {
      if (err) {
        return res.end('404')
      }
      res.end(data)
    })
  }

})

//创建端口，启动服务器
serve.listen(8900, () => {
  console.log("服务器启动成功")
  console.log(xx)
})