let isDone : boolean = false;
console.log(isDone);

let decimal: number = 6;
console.log(decimal);

let color: string = "blue";
console.log(color);

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }
    I'll be ${ age + 1 } years old next month.`;
    
console.log(sentence);

enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(c)