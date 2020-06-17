var isDone = false;
console.log(isDone);
var decimal = 6;
console.log(decimal);
var color = "blue";
console.log(color);
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + "\n    I'll be " + (age + 1) + " years old next month.";
console.log(sentence);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
//# sourceMappingURL=lesson7.js.map