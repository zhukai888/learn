"use strict";
/*
 * @Description:
 * @Author: 朱凯凯（1965581681@qq.com）
 * @Date: 2020-07-21 16:04:39
 * @FilePath: \typescript\demo2.ts
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//定义类
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        console.log(this.name);
    };
    return Person;
}());
var p = new Person('侠岚');
p.run();
//ts中实现继承  extends、 super
var PersonChildren = /** @class */ (function (_super) {
    __extends(PersonChildren, _super);
    function PersonChildren(name) {
        return _super.call(this, name) || this;
    }
    PersonChildren.prototype.run = function () {
        console.log(this.name + "qweqweqweqwewq");
    };
    return PersonChildren;
}(Person));
var pc = new PersonChildren('侠岚111');
pc.run();
//类里面的修饰符
// public 共有*(默认)， 可以在这个累里面使用，也可以在类外面使用
// protected 保护类型 当前类和他的子类里面可以访问
// private 私有，只有当前类可以访问这个属性
//静态属性，静态方法  static
var ImpStatic = /** @class */ (function () {
    function ImpStatic() {
    }
    ImpStatic.run = 43; //静态属性
    ImpStatic.runfun = function () {
        console.log("静态方法");
    }; //静态方法
    return ImpStatic;
}());
ImpStatic.runfun();
//多态（父类定义方法不实现，不同的子类去实现重写）
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + '吃老鼠');
    };
    return Dog;
}(Animal));
var dog = new Dog('狗');
dog.eat();
//抽象方法，提供其他类继承的基类，不能直接被实例化。
//用 abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现，并且必须在派生类中实现
//抽象方法只能放在抽象类里面
//抽象类和抽象方法用来定义标准，抽象类里面可以有非抽象方法
var Fruit = /** @class */ (function () {
    function Fruit() {
    }
    Fruit.prototype.run = function () {
        console.log("run");
    };
    ;
    return Fruit;
}());
var Bananas = /** @class */ (function (_super) {
    __extends(Bananas, _super);
    function Bananas(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Bananas.prototype.eat = function () {
        console.log("菜啊");
    };
    Bananas.prototype.run = function () {
        console.log("run菜啊");
    };
    ;
    return Bananas;
}(Fruit));
var banans = new Bananas("香蕉");
banans.eat();
banans.run();
