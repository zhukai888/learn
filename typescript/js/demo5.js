"use strict";
//定义操作mysql mongdb的库 
//约束统一的规范、以及代码重用
//定义一个操作mysql数据库的类,要实现泛型接口，这个类也应该是一个泛型类
var MysqlDbCopy = /** @class */ (function () {
    function MysqlDbCopy() {
        this.list = [];
    }
    MysqlDbCopy.prototype.add = function (info) {
        this.list.push(info);
        return true;
    };
    MysqlDbCopy.prototype.update = function (info) {
        throw new Error("Method not implemented.");
    };
    MysqlDbCopy.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDbCopy.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MysqlDbCopy;
}());
//操作用户表，定义一个user类和数据表做映射
var UserCopy = /** @class */ (function () {
    function UserCopy(username, password) {
        this.username = username;
        this.password = password;
    }
    return UserCopy;
}());
var user = new UserCopy("里斯", '123987');
var mysqldb = new MysqlDbCopy();
mysqldb.add(user);
console.log(mysqldb.list);
