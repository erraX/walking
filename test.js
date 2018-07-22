"use strict";
exports.__esModule = true;
// 定义变量
var isDone = true;
exports.num = 123;
var address = 'name';
// 定义函数
function add(x, y) {
    return x + y;
}
// 定义类
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayName = function () {
        return 'My name is: ' + this.name;
    };
    Person.nationality = 'black';
    return Person;
}());
