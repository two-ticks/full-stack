"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "welcome back";
console.log(message);
var isBeginner = true;
var total = 0;
var name = "abc";
var sentence = "my name is " + name + "\nI am beginner";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ["Chris", 22]; //tuple
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var randomValue = 20;
randomValue = true;
randomValue = "abcd";
var multiType;
multiType = 20;
multiType = true;
// ? optional parameter
// = default parameter
function add(num1, num2, num3) {
    if (num3 === void 0) { num3 = 10; }
    if (num3)
        return num1 + num2 + num3;
    else
        return num1 + num2;
}
console.log(add(5, 10, 6));
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: "Bruce",
    lastName: "Wayne"
};
fullName(p);
//classes and access modifiers
//by default public
var Employee = /** @class */ (function () {
    //private employeeName: string;
    //protected employeeName: string;
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee("Vishwas"); //new instatnce of class Employee
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager Delegate tasks");
    };
    return Manager;
}(Employee));
var man1 = new Manager("Bruce");
man1.delegateWork();
man1.greet();
console.log(man1.employeeName);
