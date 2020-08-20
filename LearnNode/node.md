介绍：

```
1、编写高性能网络服务器的Javascript 工具包
2、单线程、异步、事件驱动
3、耗内存，速度快
```

命令：

```
执行脚本： node 文件名.js（文件名不能为node）
```

组成：

```
没有BOM 和 DOM，只有ECMAscript

核心模块：
	文件操作模块 fs，
	http服务构建模块 http，
	path路径操作模块，
	os操作系统信息模块，
	url路径操作模块
 	
模块系统：
	1、具名的核心模块，例如 fs、http
	2、用户自己编写的文件模块（exports 导出）
	
	node 中没有全局作用域，只有模块作用域，默认封闭的，所以在父子模块中，访问不了相互模块中的数据
	
	引入模块：
	//require引入的内容在源文件顺序执行
 	let fs = required('fs')
```

模板引擎：

```js
art-template
安装：  $npm install art-template 
```

服务端渲染 和 客户端渲染 的区别

```js
客户端渲染不利于 SEO(搜索引擎优化)
服务端渲染是可以被爬虫抓取到的，客户端异步渲染很难被爬虫抓取到的
```



```
NOde.js  js的运行时环境，类似java 跟jvm的关系
```

 模块系统：

```
模块化：
    文件作用域
    通信规则（加载require，导出exports）
```

`exports` 和  `module.exports`:

```js
原理：
	在node中，每个模块内部都有 module 对象，在 module 对象中，有一个对象属性 exports 
    module = { exports = {} }
	exports == module.exports 
	注意： exports不能导出单个成员，他是一个对象，导出单个成员只能用module.exports
    （exports 具体赋值时，改变了引用地址，这时：exports != module.exports ）
	
例：
导出单个成员：module.exports = xxx;
导出多个成员：module.exports.xxx 或者 exports.xxx 或者 modeule.exports = {};
```

required 加载规则

```
1、优先从缓存加载（多个模块加载一个模块时，只会加载一次，不会重复加载）
2、判断模块标识符，优先加载顺序(核心模块、用户自定义模块、第三方模块)
```

<img src=".\required规则.png" alt="required规则" style="zoom:67%;" />

express

```
安装： npm install --save express
```

nodemon 自动重启

```
安装： npm install --global nodemon 

使用： nodemon app.js
```

```
req.query 获得get参数

req.param 获得post参数
```

ajax跨域：

```
ajax发送http请求会有跨域问题，浏览器地址栏不会出现跨域问题？
```

