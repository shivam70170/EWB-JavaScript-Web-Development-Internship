console.log("Welcome to javaScript from External javaScript");

// let ====> Blocked scoped
let age = 21;
console.log(age);

// var ====> function scoped
var age1 = 22;
console.log(age1);

//  const ====> cannot be reassign

const pi = 3.14;
// pi = pi + 1;
console.log(pi);

// # # # JavaScript Data Types

// 1. Number 
// 2.String 
// 3.Boolean
// 4.Undefined
// 5.Null
// 6.Object

// 1 Number 

let age2 = 35;
let price = 999.99;
let temp = 35.6;

console.log(age2);
console.log(price);
console.log(temp);

// 2 String

let str = "Hi Everyone!"
console.log(str);

let a = "10";
let b = "5";

console.log(a+b);

// 3 Boolean

console.log(age >= 20);

// 4 Undefined

let c;
console.log(c);

// 5 Null 

let name = null;
console.log(name);

// 6 Object

let student = {
    name : "shivam",
    age : 21,
    course : "b.tech"
};

console.log(student.name);
console.log(student.age);