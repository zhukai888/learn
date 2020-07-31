#### 介绍：

```js
RxJS 是一个库，它通过使用 observable 序列来编写异步和基于事件的程序（目的：有效管理非同步环境下的事件）。它提供了 Observable(核心)、Observer、 Schedulers、 Subjects、操作符等，提供的数组操作符可以把异步事件作为集合来处理。

ReactiveX 结合了 观察者模式、迭代器模式、使用集合的函数式编程，以满足以一种理想方式来管理事件序列所需要的一切。
```

```js
Observable (可观察对象): 
	表示一个可调用的未来值或事件的集合。
	
Observer (观察者): 
	一个回调函数的集合，它知道如何去监听由 Observable 提供的值。
	通常是一个方法， 具有next,error,complete等三个具有会第哦啊性质的属性
	
Subscription (订阅): 
	表示 Observable 的执行，主要用于取消 Observable 的执行。
	
Operators (操作符): 
	采用函数式编程风格的纯函数 (pure function)，使用像 map、filter、concat、flatMap 等这样的操作符来处理集合。
	
Subject (主体): 
	相当于 EventEmitter，并且是将值或事件多路推送给多个 Observer 的唯一方式,即广播模式。
	
Schedulers (调度器): 
	用来控制并发并且是中央集权的调度员，允许我们在发生计算时进行协调，例如 setTimeout 或 requestAnimationFrame 或其他。
```

#### 概念：

```
一组可用来处理非同步 或时间 的 javaScript 函数库

1、非同步（ajax/xhr/fetch）
    service Worker / Node Stream
    Promise

2、事件
    格式DOM事件（click，dbclick，keyup）
    Css动画事件（css3 transitionEnd event）
    H5 Geolocation/WebSockets/Server Send Event
```

#### 生成 observables

```
import { of, Observable, from, fromEvent, fromPromise } from 'rxjs';

将一组值生成 observer 
	of('foo', 'bar');

将数组生成 observer
	from([1,2,3]);

将事件生成 observe
	fromEvent(document.querySelector('button'), 'click');
	
将promise 生成 promise
	fromPromise(fetch('/users'));
```

#### 创建 observables

```
外部产生：
var myObservable = new Rx.Subject();
myObservable.subscribe(value => console.log(value));
myObservable.next('foo');


内部产生：
var myObservable = Rx.Observable.create(observer => {
  observer.next('foo');
  setTimeout(() => observer.next('bar'), 1000);
});
myObservable.subscribe(value => console.log(value));
```

#### observer（观察者）

```js
//观察者只是有三个回调函数的对象，每个回调函数对应一种 Observable 发送的通知类型。

obj.pipe(
    filter(item => item !== 'foo')
).subscribe(
    {
        next: res => console.log(res),
        error: err => console.log(err),
        complete: () => console.log('complete')
    }
);

//简化
obj.pipe(
    filter(item => item !== 'foo')
).subscribe(
    res => { console.log(res) },
    err => { console.log(err) },
    () => { console.log('hh') }
);
```

#### subscription（订阅）

```js
const i = interval(500);
const subscription = i.subscribe(x => console.log(x));
// 取消正在进行中的 Observable 执行
setTimeout(() => {
	subscription.unsubscribe();
}, 2000);
```

#### subject（主体）

```

```

#### operators（操作符）

```js
//符是函数，它基于当前的 Observable 创建一个新的 Observable。这是一个无副作用的操作：前面的 Observable 保持不变。
import { map, filter, merge, max, min, scan, tap, reduce } from 'rxjs/operators';

const obj = of('foo', 'bar', 'pss', 'qwe');
obj.pipe(
	filter(item => item !== 'foo')
).subscribe(data => {
	console.log(data);	// bar, pss, qwe
});

//注意：使用操作符时，需要先使用 pipe（为了链式调用）

实例操作符：Observable 实例上的方法，
// map, filter等
静态操作符：静态操作符是附加到 Observalbe 类上的纯函数，通常用来从头开始创建 Observalbe 。
// interVal、 erge、combineLatest、concat
```



