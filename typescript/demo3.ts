//接口，定义了行为和动作的规范。对批量方法进行约束
//它只规定了这批类里必须提供某些方法，提供这些方法的类满足实际需要


//1、属性接口
interface fullName {
  firstName: string;
  secondName: string
}
function printName(obj: fullName) {
  console.log(obj.firstName)
}
let obj = {
  // age:20,
  firstName: 'ss',
  secondName: "ee"
}
printName(obj)

//可选属性
interface fullName1 {
  firstName?: string;
  secondName?: string
}
function printName1(obj: fullName1) {
  console.log(obj.firstName)
}


//2、函数类型参数：对方法闯入的参数，以及返回值进行约束
interface encrypt {
  (key: string, value: string): string;
}

let md5: encrypt = function (key: string, value: string): string {
  console.log(key + value)
  return key + value;
}
md5('name', 'www')


//3、可索引接口，对数组、对象的约束
//对数组的约束
interface UserArr {
  [index: number]: string
}
let array: UserArr = ["889", "777"];
//对对象的约束
interface UserObj {
  [index: string]: string
}
let userObj: UserObj = { name: '20' }


//4、类类型的接口,需要重写方法和属性
interface Vegetables {
  name: string;
  classify(str: string): void;
}
class Potato implements Vegetables {
  name: string;
  constructor(name: string) {
    this.name = name
  }
  classify() {
    console.log(this.name + "土豆")
  }
}
let potato = new Potato("切了");
potato.classify()


//接口扩展,接口继承接口，不用重写方法
interface Animal {
  eat(): void;
}

interface Persons extends Animal {
  work(): void
}

class Me implements Persons {

  public name: string;

  constructor(name: string) {
    this.name = name
  }

  eat() {
    console.log("eat")
  }

  work() {
    console.log("work")
  }

}

let me = new Me("我")
me.eat();