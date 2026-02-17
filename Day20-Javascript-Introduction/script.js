console.log("Hello world");

// variables
// var, let & const

// variable creation using var keyword
var employeeName = "Narasimhan";
console.log(employeeName);

// variable creation using let keyword
let companyName = "Entri";
console.log(companyName);

// variable creation using const keyword
const role = "Mentor";
console.log(role);

// Natures of Variable Keywords

// var is a global scope
var day = "ABC";
// console.log(day);
var day = "DEF";
console.log(day);

// let is a block scope
let age = 17;
// let age = 19; -- Error
age = 18;
console.log(age);

// const is a block scope
const nationality = "Indian";
// nationality = "American"; -- Error
console.log(nationality);

// Interview question
// mostly asked in all type of companies
// Hoisting - Flag Hoisting

console.log(course);
var course = "FSD";

console.log(tax);
let tax = 3; // let - ReferenceError

console.log(laptop);
const laptop = "MAC"; // const - ReferenceError