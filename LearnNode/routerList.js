let http = require('http')


let serve = http.createServer()


serve.on("request", (req, res) => {




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

  let resdata = {
    "code": 0,
    "data": router
  }

  if (req.url == '/a') {
    res.setHeader("Content-Type", "application/json;charset:utf-8");
    res.end(JSON.stringify(resdata));
  } else {
    res.setHeader("Content-Type", "application/json;charset:utf-8");
    res.end("error");
  }

})

//创建端口，启动服务器
serve.listen(8900, () => {
  console.log("服务器启动成功")
})