
/* Rest Parameter : truyển vào từng phẩn tử lấy ra 1 mảng*/


// let displayColors = function(){
//     for(let i in arguments)
//     {
//         console.log(arguments[i]);
//     }
// }

// let displayColors = function(...colors){
//     for(let i in colors)
//     {
//         console.log(colors[i]);
//     }
// }

// let displayColors = function(...colors:string[]){
//     console.log(colors);
// }

// let displayColors = function(message, ...colors:string[]){
//     console.log(message);
//     console.log(colors);
// }

let displayColors = function(...colors:string[]){
    console.log(arguments.length);
}

let message = "hello";
displayColors(message,"Red");
displayColors(message,"Red","Green");
displayColors(message,"Red","Green","Blue");

