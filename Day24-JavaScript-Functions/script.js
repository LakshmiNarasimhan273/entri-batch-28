// JavaScript Functions

// Basic Function Syntax

// function - keyword to define a function
// welcome - function name
function welcome(){ // () -> parameters receiving the data from outside of the function and pass the data inside to the function
    // function body - logics
    console.log("Welcome to JavaScript");
}
welcome(); // callback (function name) () -> arguments send the data to parameter

// Function Parameters & Arguments

let num1 = 10;
let num2 = 10;

let num3 = 20;
let num4 = 20;

function add(a, b){
    console.log(a + b);
}

add(num1, num2);
add(num3, num4);

function user(){
    return "Welcome Narasimhan";
};

console.log(user());

// logics without optimization

// let mark = 87;
// let mark2 = 95;

// if(mark >= 90 && mark <= 100){
//     console.log("Grade A")
// } else if (mark >= 70 && mark < 90){
//     console.log("Grade B");
// }

// if(mark2 >= 90 && mark2 <= 100){
//     console.log("Grade A")
// } else if (mark2 >= 70 && mark2 < 90){
//     console.log("Grade B");
// }

// optimized using function
function calculateGrade(studentName, department, mark){
    let grade;

    if(mark >= 90 && mark <= 100){
        grade = "A";
    } else if (mark >= 70 && mark < 90){
        grade = "B";
    } else if (mark >= 50 && mark < 70){
        grade = "C";
    } else {
        grade = "Fail";
    }
    return `Hello ${studentName}(${department}), You've got ${grade} Grade`;
    // console.log(`Hello ${studentName}(${department}), You've got ${grade} Grade`)

};
console.log(calculateGrade("Narasimhan", "CS", 86));
console.log(calculateGrade("Alhazeena", "IT", 92));
console.log(calculateGrade("Sathish", "CS", 90));

// Nested Function
function parent(name, status){
    console.log(`${name} Function ${status}`);

    function child(status){
        console.log(`Child Function ${status}`);
    }
    child("Running Successfully");
}
parent("Parent", "Executed");

// Interview problem
// Most wanted scenario
// Function Currying

// 1) validate
// 2) navigating to dashboard

// syntax - function currying
function multiply(a){
    return function(b){
        return a * b;
    }
};

console.log(multiply(5)(5));

// Amazon real use case
function authentication(email){
    return function(password){
        if(email === "admin@mail.com" && password === "admin@123"){
            console.log("Navigating to Dashboard");
        }else{
            console.log("Invalid Credentials");
        }
    }
}

authentication("admin@mail.com")("admin@123");
authentication("admin@mail.com")("admin@321");