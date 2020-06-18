

/** Kiểu Array và Tuples */

let arr1 : string[] = ["Hello","world"];
let arr2 : number[] = [1,3,5,7,9];
let arrAny : any[] = [10,"Hello",true];

let arr3 : Array<string> = ['TEDU','Online'];

console.log(arr1[0]);

//tuple
let student : [string,number,boolean];
student = ['Nguyen Van A',22,true];
student[2] = true;
// student[3] = new Object();