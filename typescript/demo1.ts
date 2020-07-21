
console.log("nihao")

let arr: [string, number, boolean] = ['32', 23, true]
console.log(arr)

enum Flag { success = 1, error = -1 }
let f: Flag = Flag.success;
console.log(f)


enum Color { red, blue, orange }
let c: Color = Color.red;
console.log(c)

//函数定义：
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

//剩余参数
function sum1(a: number, ...reuslt:number[]): number {
  return a
}

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



