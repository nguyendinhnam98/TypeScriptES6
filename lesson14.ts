

/**  Destructuring Object (Bóc tách Object) */

let emp={
    fname: 'Technology',
    lname: 'Education',
    level:2,
}

// cách 1: 
// let {fname, lname, level} = emp;
// console.log(fname);
// console.log(lname);
// console.log(level);

// cách 2:
let {fname : f, lname : l, level : lv} = emp;
console.log(f);
console.log(l);
console.log(lv);
