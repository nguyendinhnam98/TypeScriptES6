// var getBonus = function(value = 10, tax = 20){
//     console.log(value + tax);
// }
// 20 + tax
//getBonus(20);
// 20 + value
//getBonus(undefined,20);
var getPercent = function () { return 2; };
var getBonus = function (value, tax, salary) {
    if (value === void 0) { value = 10; }
    if (tax === void 0) { tax = value * getPercent(); }
    if (salary === void 0) { salary = 1; }
    console.log(value + tax);
    console.log(arguments.length);
};
getBonus();
getBonus(60);
getBonus(20, 40);
getBonus(20, 40, 10);
//# sourceMappingURL=lesson10.js.map