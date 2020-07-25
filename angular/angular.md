安装CLI

```
npm install -g @angular/cli
```

创建项目

```
ng new my-app
```



数据绑定

```
双向数据绑定

Angular 在每个 JavaScript 事件循环中处理所有的数据绑定，它会从组件树的根部开始，递归处理全部子组件
```





服务和DI(依赖)注入：

```
Angular 把组件和服务区分开，以提高模块性和复用性。 通过把组件中和视图有关的功能与其它类型的处理分离开，你可以让组件类更加精简、高效。

服务：
组件应该把诸如从服务器获取数据、验证用户输入或直接往控制台中写日志等工作委托给各种服务。
通过把各种处理任务定义到可注入的服务类中，你可以让它被任何组件使用。 通过在不同的环境中注入同一种服务的不同提供者，你还可以让你的应用更具适应性。

依赖注入：
DI 被融入 Angular 框架中，用于在任何地方给新建的组件提供服务或所需的其它东西。 组件是服务的消费者，也就是说，你可以把一个服务注入到组件中，让组件类得以访问该服务类。

在 Angular 中，要把一个类定义为服务，就要用 @Injectable() 装饰器来提供元数据，以便让 Angular 可以把它作为依赖注入到组件中。 同样，也要使用 @Injectable() 装饰器来表明一个组件或其它类（比如另一个服务、管道或 NgModule）拥有一个依赖。

注入器是主要的机制。Angular 会在启动过程中为你创建全应用级注入器以及所需的其它注入器。你不用自己创建注入器。
该注入器会创建依赖、维护一个容器来管理这些依赖，并尽可能复用它们。

提供者是一个对象，用来告诉注入器应该如何获取或创建依赖。

依赖不一定是服务 —— 它还可能是函数或值。


提供服务
例：
    @Injectable({
      providedIn: 'root',
    })
    
    @Component({
          selector:    'app-hero-list',
          templateUrl: './hero-list.component.html',
          providers:  [ HeroService ]
        })
```

指令：

```js
ng-app	//定义一个 AngularJS 应用程序

ng-controller	@Component//绑定控制器

ng-model  [(ngModel)]//双向绑定

ng-init="name='JOJO'" 	//初始化数据

ng-click	(click)	//单击事件 

ng-repeat	*ngFor	//不允许出现重复元素
		
ng-bind，{{}}	[]//绑定

ng-hide，ng-show		[hidden]	//隐藏
 
ng-class	[ngClass]	//绑定class
 
ng-href 	[href]	//绑定 href
 
ng-if	*ngIf	//条件
 
ng-src	[src]	//绑定src
 
ng-style	[ngStyle]，[style.color]//样式
 
ng-switch	//选择器
	ng-switch-when="true"		*ngSwitchCase="true"
	ng-switch-when="false"		*ngSwitchCase="false"
    ng-switch-default			ngSwitchDefault

ng-template

ng-container
```

过滤器/管道：

```
<td>{{movie.price | currency}}</td>

angular有内置的过滤器，常见的有：
    DatePipe：根据本地环境中的规则格式化日期值。
    UpperCasePipe：把文本全部转换成大写。
    LowerCasePipe ：把文本全部转换成小写。
    CurrencyPipe ：把数字转换成货币字符串，根据本地环境中的规则进行格式化。
    DecimalPipe：把数字转换成带小数点的字符串，根据本地环境中的规则进行格式化。
    PercentPipe ：把数字转换成百分比字符串，根据本地环境中的规则进行格式化。
```

模块（*NgModule*）：

```
模块

用于存放一些内聚的代码块的容器，这些代码块专注于某个应用领域、某个工作流或一组紧密相关的功能。

每个 Angular 应用都至少有一个 NgModule 类，也就是根模块，它习惯上命名为 AppModule，并位于一个名叫 app.module.ts 的文件中。引导这个根模块就可以启动你的应用。



NgModule 是一个带有 @NgModule() 装饰器的类，@NgModule() 装饰器是一个函数，它接受一个元数据对象，该对象的属性用来描述这个模块。

declarations（可声明对象表） —— 那些属于本 NgModule 的组件、指令、管道。
exports（导出表） —— 那些能在其它模块的组件模板中使用的可声明对象的子集。
imports（导入表） —— 那些导出了本模块中的组件模板所需的类的其它模块。
providers —— 本模块向全局服务中贡献的那些服务的创建器。 这些服务能被本应用中的任何部分使用。（你也可以在组件级别指定服务提供者，这通常是首选方式。）
bootstrap —— 应用的主视图，称为根组件。它是应用中所有其它视图的宿主。只有根模块才应该设置这个 bootstrap 属性。



建立模块：

//自定义模块名， 引用的模块名
var app = angular.module("myApp", []);

//创建控制器
app.controller("myController", function ($scope) {
	$scope.list = [101, 252, 345, 836];
});

```



CLI：

```js
npm install -g @angular/cli

ng new 项目名

ng new 项目名 --skip-install	//只创建项目，不安装依赖

ng g component 组件名 		//生成component，class等
```

ViewChild

```js
获取节点，父组件调用子组件方法

<div #box></div>

//引入viewChild。
import { ViewChild } from '@angular/core'

//获取dom节点,赋值给mybox
@ViewChild('box') myBox:any;
```

生命周期函数：

```
ngOnInit：	//组件和指令初始化完成，dom未加载完成（添加angular指令的dom未加载 ）

ngAfterViewInit   //视图加载完成，dom加载完成，dom操作放此处
```

父组件传值

父 ==》 子

```js
	<app-header [msg]="msg"></app-header>
子组件引入@input模块
	import { Input } from '@angular/core'
子组件中@Input接受父组件传过来的数据
	@Input() msg:string
	
方法： 引入ViewChild获取

通过获取 子组件 的节点，在执行方法
	@ViewChild('topbar') topbar:any;
	this.topbar.run()
```

子 ==》 父

```js
1、传递父组件方法，子组件调用：
	[runp]="runp"
	
2、 通过 output 触发父组件的方法
	子组件引入 Output 和 EventEmitter
		import {Output, EventEmitter} '@angular/core'
	子组件中实例化 EventEmitter
    	@Output() private outer = new EventEmitter<string>();
		this.outer.emit()	//向父组件广播数据

	父组件中 定义接受事件，outer是子组件的EventEmitter的实例：
    	<app-header (outer)="runParent($event)"></app-header>
```

生命周期函数：

```css
ngOnChanges：当组件中指令的任何一个可绑定属性发生变化时调用

ngOnInit： 初始化数据之后调用，获取不到 具有指令的dom，一般用来请求数据，在第一次ngOnChanges后调用

ngDoCheck:	除了使用默认的变更检查器执行检查之外，还会为指令执行自定义的变更检测函数。

ngAfterContentInit:  把内容 投影到组件中调用

ngAfterContentChecked: 每次 投影进组件的内容的变更时 调用

ngAfterViewInit：组件dom渲染完成

ngAfterViewChecked： 每次做完组件视图和子组件的变更检测之后调用

ngOnDestroy： 在指令、管道或服务被销毁时调用。
```

路由：

```tsx
//生成路由模块
	ng new routing-app --routing	
//在app.module中引入
	import { AppRoutingModule } from './app-routing.module';	
//配置路由文件
    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
 

获取路由信息:
//引入 ActivatedRoute, ParamMap 模块
	import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//添加到路由页面的构造函数中
    constructor(
      private route: ActivatedRoute,
    ) {}
//获取路由传递的参数
  	this.route.queryParams.subscribe(params => {
    	this.name = params['name'];
  	});


路由配置：
//通配符页面
	{ path: '**', component:  PageNotFoundComponent }

// 设置重定向
	{ path: '',   redirectTo: '/first-component', pathMatch: 'full' }

//嵌套路由
    { 
        path: 'first-component',
        component: FirstComponent,
        children: [
            {
                path: 'second-component',
                component: FirstComponent,
            }
        ]
    }

//跳转路由
	<a routerLink="../second-component">Relative Route to second component</a>
	this.router.navigate(['items'], { relativeTo: this.route });

    1.以根路由跳转/login
    this.router.navigate(['login']);

    2.设置relativeTo相对当前路由跳转，route是ActivatedRoute的实例，使用需要导入ActivatedRoute
    this.router.navigate(['login', 1],{relativeTo: route}); 

    3.路由中传参数 /login?name=1
    this.router.navigate(['login', 1],{ queryParams: { name: 1 } }); 
	<a [routerLink]="['/newPage']"  [queryParams]="{aid:key}" RouterLinkActive="类名"></a>

    4.preserveQueryParams默认值为false，设为true，保留之前路由中的查询参数/login?name=1 to /home?name=1
    this.router.navigate(['home'], { preserveQueryParams: true }); 

    5.路由中锚点跳转 /home#top
     this.router.navigate(['home'],{ fragment: 'top' });

    6.preserveFragment默认为false，设为true，保留之前路由中的锚点/home#top to /role#top
    this.router.navigate(['/role'], { preserveFragment: true }); 

    7.skipLocationChange默认为false，设为true，路由跳转时浏览器中的url会保持不变，但是传入的参数依然有效
    this.router.navigate(['/home'], { skipLocationChange: true });

    8.replaceUrl默认为true，设为false，路由不会进行跳转
    this.router.navigate(['/home'], { replaceUrl: true }); 

路由选中：
<a RouterLinkActive="类名"></a>
    
```

路由守卫：

```js
创建服务：
	ng generate guard your-guard

CanActivate：来处理导航到某路由的情况。
CanActivateChild： 来处理导航到某子路由的情况。
CanDeactivate：处理从当前路由离开的情况.
Resolve： 在路由激活之前获取路由数据。可以处理请求提前加载的情况
CanLoad：处理异步导航到某特性模块的情况。
```

RxJS

```js
Observable：
new Observable((observer) => {
  observer.next()
  //必要。用来处理每个送达值。在开始执行后可能执行零次或多次。
  observer.error()
  //可选。用来处理错误通知。错误会中断这个可观察对象实例的执行过程。
  observer.complete	
  //可选。用来处理执行完毕（complete）通知。当执行完毕后，这些值就会继续传给下一个处理器。
  })

subscribe()	// 订阅，返回一个id，可用于取消订阅
unsubscribe()	//取消订阅


```

网络请求：

```js
app.modules: 引入HttpClientModule
import {HttpClientModule} from '@angular/common/http'

页面引入：
import { HttpClient，httpHeaders } from '@angular/common/http'; 
const   ructor(private http: HttpClient) {
}

const httpOptions = {headers:new HttpHeaders({
	'Content-Type':'application/json'
})}


let res = this.http.request('GET', "api/a",{},httpOptions).subscribe((res) => {
	console.log(res)
});

let res = this.http.post("api/a",{},httpOptions).subscribe((res) => {
	console.log(res)
});
```



```tsx
HttpParams参数写法：

const params =newHttpParams().set("_page","1").set("_limit","10");//方式一：链式语法，set不能分开写

const params =newHttpParams({fromString:"_page=1&_limit=10"});//方式二：使用 fromString

const params =newHttpParams({ fromObject: { _page:"1", _limit:"10"} });//方式三：使用 fromObject
```



Jsonp请求数据

```
在app.module中引入 HttpClientModule,HttpCliemtJsonpModule

this.http.jsonp("api/a",'XXX').subscribe((res) => {
```























