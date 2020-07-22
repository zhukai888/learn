"use strict";
//接口，定义了行为和动作的规范。对批量方法进行约束
//它只规定了这批类里必须提供某些方法，提供这些方法的类满足实际需要
function printName(obj) {
    console.log(obj.firstName);
}
var obj = {
    // age:20,
    firstName: 'ss',
    secondName: "ee"
};
printName(obj);
function printName1(obj) {
    console.log(obj.firstName);
}
var md5 = function (key, value) {
    console.log(key + value);
    return key + value;
};
md5('name', 'www');
var array = ["889", "777"];
var userObj = { name: '20' };
var Potato = /** @class */ (function () {
    function Potato(name) {
        this.name = name;
    }
    Potato.prototype.classify = function () {
        console.log(this.name + "土豆");
    };
    return Potato;
}());
var potato = new Potato("切了");
potato.classify();
var Me = /** @class */ (function () {
    function Me(name) {
        this.name = name;
    }
    Me.prototype.eat = function () {
        console.log("eat");
    };
    Me.prototype.work = function () {
        console.log("work");
    };
    return Me;
}());
var me = new Me("我");
me.eat();
