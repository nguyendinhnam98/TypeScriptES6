// Khai báo class
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.run = function () {
        console.log('Person is running...');
    };
    return Person;
}());
// person();
// function person(){
// }
var p1 = new Person();
// console.log(p1);
// console.log(typeof Person);
//console.log(p1.run === Person.prototype.run);
console.log(p1.run);
//# sourceMappingURL=lesson17.js.map