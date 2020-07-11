

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
	os操作系统信息模块
 	
模块系统：
	1、具名的核心模块，例如 fs、http
	2、用户自己编写的文件模块
	
	node 中没有全局作用域，只有模块作用域，默认封闭的，所以在父子模块中，访问不了相互模块中的数据
	
	引入模块：
	//require引入的内容在源文件顺序执行
 	let fs = required('fs')
```



```
NOde.js  js的运行时环境，类似java 跟jvm的关系
```



```
在每个文件模块内中都提供了一个export对象，默认为一个空对象，它可以从外部模块中访问到该模块内部的成员
exports.foo = 'hello'


```

