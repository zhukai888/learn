/*
 * @Description: 
 * @Author: 朱凯凯（1965581681@qq.com）
 * @Date: 2020-07-21 16:04:39
 * @FilePath: \typescript\demo2.ts
 */


//定义类
class Person {
  name: string;  //属性，前面省略了public关键字
  constructor(name: string) {
    this.name = name;
  }
  run(): void {
    console.log(this.name)
  }
}
let p = new Person('侠岚')
p.run()



//ts中实现继承  extends、 super
class PersonChildren extends Person {
  constructor(name: string) {
    super(name)
  }
  run(): void { //重写父类方法
    console.log(this.name + "qweqweqweqwewq")
  }
}

let pc = new PersonChildren('侠岚111')
pc.run();


//类里面的修饰符
// public 共有*(默认)， 可以在这个累里面使用，也可以在类外面使用
// protected 保护类型 当前类和他的子类里面可以访问
// private 私有，只有当前类可以访问这个属性



//静态属性，静态方法  static
class ImpStatic {
  constructor() {
  }
  static run: number = 43; //静态属性
  static runfun = function (): void {
    console.log("静态方法")
  }//静态方法
}

ImpStatic.runfun();


//多态（父类定义方法不实现，不同的子类去实现重写）
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat() {
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  eat() {
    console.log(this.name + '吃老鼠')
  }
}


let dog = new Dog('狗');
dog.eat()


//抽象方法，提供其他类继承的基类，不能直接被实例化。
//用 abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现，并且必须在派生类中实现
//抽象方法只能放在抽象类里面
//抽象类和抽象方法用来定义标准，抽象类里面可以有非抽象方法
abstract class Fruit {
    abstract eat():any;
    run(){
      console.log("run");
    };
}

class Bananas extends Fruit {
  name:string;
  constructor(name:string) {
    super()
    this.name = name
  }

  eat(){
    console.log("菜啊")
  }

  run(){
    console.log("run菜啊");
  };
}
let banans = new Bananas("香蕉");
banans.eat();
banans.run();





