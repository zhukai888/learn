let foo = 'bar'
console.log(foo)


// fs(file-system) 是 node 操作文件的模块，提供了所有文件操作的APi
var fs = require('fs')

//读取文件,成功 data 16进制数据，err null，失败，err为错误对象 
fs.readFile('./ss.text', (err, data) => {
  console.log(data.toString(), err)
})

//写文件
fs.writeFile('./ss.text', "朱开开",(err) => {
  console.log(err+"writeFile")
})
