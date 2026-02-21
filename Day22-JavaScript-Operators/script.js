// Operators
// 1) Arithmetic operator
// used for perform mathematical operations
let a = 10;
let b = 5;
// console.log(5 + 5);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// Assignment Operator
// Important interview problem
// pre-assignment | post assignment

// let c = 10; = is a assignment operator

// pre-assignment
let num = 10;
num += 1;
console.log(num);

// post-assignment
let age = 18;
age =+ 10;
console.log(age);

// pre-assignment - real-time example
let voteNumber = 155;
voteNumber += 1;
console.log(voteNumber);

// post-assignment - real-time example
let waitingList = 20;
waitingList =+ 6;
console.log(waitingList);

// Comparison operator
let eligibleAge = 18;
let userAge = 29;
// > greater than
console.log(userAge > eligibleAge);

// lesser than
// < lesser than
console.log(userAge < eligibleAge);

// greater than or equal to
console.log(userAge >= eligibleAge);

// Very important operator type
// == and ===
let num1 = 10;
let num2 = 10;
// == (double equal to) - it checks only the value
console.log(num1 == num2);
// === (triple equal to) - it checks the value and the data-type
console.log(num1 === num2);

// Ternary operator -> ? :
// ? - true
// : - false
// it is for decision making purpose
let total = 250;
total > 300 ? console.log("Pass aaitan aathaa") 
: console.log("Fail");

// Ternary operator - real time example
let isActive = false;

isActive ? console.log("Learner is actively submitting the assignment")
: console.log("Not attending the sessions");

// Expressions
let mark = 325;
console.log("My 10th total", mark);
console.log(`My 10th total is ${mark}`);

// Interview problem
// product based problem
console.log(5 + 5);
console.log(5 + "5");
console.log(5 - "10");
console.log(3 * "10");
console.log(5 - "Narasimhan");
// Not As Number