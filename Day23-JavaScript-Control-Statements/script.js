// Control Statements

// conditional statement
// if else
// switch case
let voterAge = 18;

if (voterAge > 18) {
    console.log("Eligible for Vote");
} else {
    console.log("Not Eligible for vote");
}

// Level 2 - Student Grading system
// mark >= 50 | 69 = C
// mark >= 70 | 89 = B
// mark >= 90 = A
// && AND Operator

let marks = 45;

if(marks >= 90 && marks <= 100){
    console.log("Grade A");
} else if (marks >= 70 && marks < 90){
    console.log("Grade B");
} else if(marks >= 50 && marks < 70){
    console.log("Grade C");
} else {
    console.log("Fail");
}

// Interview Problem (product based companies scenario for optimization)
// nested condition
let total = 49;

if(total >= 50){
    // grade calculate
    if(total >= 90 && total <= 100){
        console.log("Grade A");
    } else if (total >= 70 && total < 90){
        console.log("Grade B");
    }else{
        console.log("Grade C");
    }
} else {
    console.log("Fail");
}

// switch case
let day = 8;

switch(day){
    case 1:
        console.log("Sunday");
        break;

    case 2: 
        console.log("Monday");
        break;

    case 3:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid number");
}

// Looping Statement
// for loop | while loop

// initialValue (starting value)
// condition (end value)
// iteration

for(let initialValue = 1; initialValue <= 100; initialValue++){
    console.log("for loop", initialValue);
}

// while loop
let i = 1; // initial value

while(i <= 5){ // condition
    console.log("while loop", i);
    i++; // iteration
}

// User Authentication System
// authentication & authorization

// registeredInfo = {
// email: narasimhan@mail.com,
// pwd: narasimhan@123
// }

let registeredMail = "narasimhan@mail.com";
let registerdPwd = "Narasimhan@123";

let loginMail = "narasimhan123@mail.com";
let loginPwd = "Narasimhan@123";

if(loginMail === registeredMail && loginPwd === registerdPwd){
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}