

/**  Destructuring Array (Bóc tách Array) */


// var employees = ['A','B','C'];
// var employees = ['A','B'];
// let [emp1,emp2,emp3] = employees;

// console.log(emp1);
// console.log(emp2);
// console.log(emp3);

// var employees = ['A','B','C'];
// let [,,emp3] = employees;

// console.log(emp3);

var employees = ['A','B','C'];
let [emp1, ...emp2] = employees;

console.log(emp1);
console.log(emp2);