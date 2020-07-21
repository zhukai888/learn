安装：

```tsx
微软开发：
	是javascript 的超集(扩展)
	
npm install -g typescript

tsc -v //查看版本
tsc helloworld.ts //编译文件
```

数据类型：

```
1、布尔值(boolean)：

2、数字：二进制、八进制、十进制、十六进制(number)

3、字符串(string)：

4、数组(array):

5、元组 （tuple):
	元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
	let x: [string, number];
	x = ['hello', 10];

6、枚举：(enum)

7、任意类型:(any)

8、Void类型:表示没有任何类型，用于定义类型

9、Null 和 Undefined:

10、Never:	never类型表示的是那些永不存在的值的类型。
            声明never的变量只能被nerve类型所赋值
            var a = (()=>{
                throw new Error('错误')
            })

11、Object:
	object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。

12、类型断言有两种形式。 
	其一是“尖括号”语法：
		let someValue: any = "this is a string";
		let strLength: number = (<string>someValue).length;
	
	as语法:
		let someValue: any = "this is a string";
		let strLength: number = (someValue as string).length;
13、联合类型
    let num:number | undefined
```

变量声明:

```
let const:boolean = true   //变量声明必须指定类型

//定义数组
    let list: number[] = [1, 2, 3];  
    let list: Array<number> = [1, 2, 3];    //使用数组泛型

//定义元组
    let x: [string, number]; x = ['hello', 10];
//当访问一个越界的元素，会使用联合类型替代：OK, 字符串可以赋值给(string | number)类型
    x[5];

//定义枚举
    enum Flag { success = 1, error = -1 }

    enum Color { red, blue, orange }
    let c: Color = Color.red;
    //默认赋值下标
    console.log(c)
```
函数：

函数定义：

```tsx
//1、声明法：
function run(name: string, age: number): string {
  return '1'
}

//2、匿名函数
var run1 = function (): string {
  return '1'
}

//选传参数
function getInfo(name: string, age?: number): string {
  return '1'
}

//剩余参数
function sum(a: number, b: number, c: number, d: number): number {
  return a + b + c + d
}
function sum1(a: number, ...reuslt:number[]): number {
  return a
}
```

函数重载：

```
//函数重载,通过为同一个函数提供了多个类型函数定义来试下多种功能的目的
function getInfos(config:string):string;

function getInfos(config:number):number;

function getInfos(str:any):any{
  if(typeof str === 'string'){
    return '1'
  }else if(typeof str === 'number'){
    return 1
  }else{
    return undefined
  }
};
```

接口：

```js
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);


LabelledValue接口代表了有一个 label属性且类型为string的对象。

类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以。
```

可选属性:

```
带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号。
interface SquareConfig {
  color?: string;
  width?: number;
}
```

只读属性：

```
属性名前用 readonly来指定只读属性:

interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };	// x,y不能改变
```

函数类型：

```tsx
接口能够描述JavaScript中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。

interface SearchFunc {
  (source: string, subString: string): boolean;
}
```

可索引的类型：

```tsx
 可索引类型具有一个 索引签名，它描述了对象索引的类型，还有相应的索引返回值类型。

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
```

类类型：

```tsx
1、实现接口
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}

2、类静态部分与实例部分的区别
interface ClockConstructor {
    new (hour: number, minute: number);
}

class Clock implements ClockConstructor {
    currentTime: Date;
    constructor(h: number, m: number) { }
}

```

继承接口：

```
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
```

混合类型:

```tsx
//接口能够描述JavaScript里丰富的类型
//例子：一个对象可以同时做为函数和对象使用，并带有额外的属性。
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```

接口继承类：

```tsx
当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。
当你有一个庞大的继承结构时这很有用，但要指出的是你的代码只在子类拥有特定属性时起作用。 这个子类除了继承至基类外与基类没有任何关系。
```

## 类：

```

```

继承：

```tsx
基于类的程序设计中一种最基本的模式是允许使用继承来扩展现有的类。
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}
```







类型注解：

```
function greeter(person: string) {
    return "Hello, " + person;
}

```

接口：

```
interface Person {
    firstName: string;
    lastName: string;
}
```

类:

```
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
```

