"use strict";
console.log("nihao");
var arr = ['32', 23, true];
console.log(arr);
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = -1] = "error";
})(Flag || (Flag = {}));
var f = Flag.success;
console.log(f);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["orange"] = 2] = "orange";
})(Color || (Color = {}));
var c = Color.red;
console.log(c);
//函数定义：
//1、声明法：
function run(name, age) {
    return '1';
}
//2、匿名函数
var run1 = function () {
    return '1';
};
//选传参数
function getInfo(name, age) {
    return '1';
}
//剩余参数
function sum(a, b, c, d) {
    return a + b + c + d;
}
//剩余参数
function sum1(a) {
    var reuslt = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        reuslt[_i - 1] = arguments[_i];
    }
    return a;
}
function getInfos(str) {
    if (typeof str === 'string') {
        return '1';
    }
    else if (typeof str === 'number') {
        return 1;
    }
    else {
        return undefined;
    }
}
;
