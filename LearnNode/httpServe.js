//构建 web 服务器
let http = require('http')

//引入 required.js
let requ = require('./require') 

//创建http
let serve = http.createServer()



//注册 request 事件，当强求过来时，会自动触发服务器的request 请求事件
//req 请求对象
  //req.url 请求路径
//res 响应对象
  // write() 用来给客户发送响应数据，可以使用多次，
    //但是一定要使用end来结束响应，否则客户端会一直等待

//相应内容只能是二进制数据或者字符串
serve.on("request", (req,res) => {
  console.log(req.url)

  console.log(requ.foo)
  console.log(requ.add())


  //res.end("niii");
  res.setHeader("Content-Type", "application/json;charset:utf-8");  
  res.write("在的但是")
  res.write("niii")
  res.end();
})

//创建端口，启动服务器
serve.listen(8900, () => {
  console.log("服务器启动成功")
})