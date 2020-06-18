/* Kế thừa class trong ES6 */
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
var Person = /** @class */ (function () {
    function Person(name) {
        console.log(name + 'Person constructor');
    }
    Person.prototype.getId = function () {
        return 10;
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name) {
        var _this = _super.call(this, name) || this;
        console.log(name + 'Employee constructor');
        return _this;
    }
    Employee.prototype.getId = function () {
        return _super.prototype.getId.call(this);
    };
    return Employee;
}(Person));
var emp = new Employee("TEDU");
console.log(emp.getId());
//# sourceMappingURL=lesson19.js.map