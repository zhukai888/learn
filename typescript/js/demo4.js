"use strict";
//泛型： 解决 类、接口、防范的复用性、以及对不特定数据类型的支持
//只能返回string类型的数据
//泛型：可以支持不特定的数据类型，要求传入的参数和返回的参数一致
//泛型函数
function getData(value) {
    console.log(value);
    return value;
}
getData("456789");
getData(456789);
//泛型类
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (num) {
        this.list.push(num);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        this.list.forEach(function (item, index) {
            if (item < minNum) {
                minNum = item;
            }
        });
        return minNum;
    };
    return MinClass;
}());
var m = new MinClass();
var m1 = new MinClass();
m.add(8);
m.add(234);
m.add(276);
m.add(243);
m.add(298);
m.add(24);
console.log(m.min());
m1.add(8);
m1.add(6);
console.log(m1.min());
var getDataD = function (value) {
    return value;
};
getData('张三');
function getDataCopy(value) {
    return value;
}
var myGetData = getDataCopy;
myGetData('20');
// 泛型避免重复代码，对不特定数据类型的支持（类型校验）
// 1、定义个类
// 2、把类作为参数来约束数据传入的类型
//类封装
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (user) {
        console.log(user);
        return true;
    };
    return MysqlDb;
}());
var u = new User();
u.username = '张三';
u.password = '123456';
new MysqlDb().add(u);
//接口封装
var MysqlDbc = /** @class */ (function () {
    function MysqlDbc() {
    }
    MysqlDbc.prototype.add = function (info) {
        console.log(info);
        return false;
    };
    return MysqlDbc;
}());
var Userc = /** @class */ (function () {
    function Userc() {
    }
    return Userc;
}());
var uc = new Userc();
uc.username = '里斯';
uc.password = '123456';
new MysqlDbc().add(uc);
