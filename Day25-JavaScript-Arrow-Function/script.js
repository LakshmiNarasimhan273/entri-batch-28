// Javascript Arrow Function

// Native(Traditional) Function
let topic = "JS";

function welcome(a){
    console.log("Welcome to", a);
}

welcome(topic);

// Arrow Function =>
const greet = () => {
    console.log("Arrow Function executed");
};

greet();

// Paramter and Argument
const message = (username) => {
    console.log(username);
}

message("Narasimhan");

// return statement
// const learner = (learnerName) => {
//     return learnerName
// }

const learner = learnerName => learnerName;
// learner -> function name
// learnerName(left side) - parameter variable
// learnerName(right side) - return statement

console.log(learner('Someone'));

// callbacks
// a function passed through the argument and parameter
// function one(){
//     console.log("One");
// }

// function two(){
//     one();
//     console.log("Two");
// }

// two();

function one(){
    console.log("One");
}

function two(callbacks){
    console.log("Two");
    callbacks();
}

two(one);

// real time use case for callbacks

function upiApp(accountBalance, upiPin){
    let enteredPin = 3333;
    let enteredAmount = 15000;

    if(upiPin === enteredPin && enteredAmount <= accountBalance){
        console.log(`Transaction successfully completed - ${enteredAmount}`);
    } else {
        console.log("Invalid Transaction");
    }
}

function bankServer(callbacks){
    let transactionPin = 3333;
    let balance = 10000;
    callbacks(balance, transactionPin);
}

bankServer(upiApp);

// function currying in arrow function
const sendNotification = (type) => {
    return (response) => {
        if(type === "email"){
            console.log(`Email Sent: ${response}`);
        } else if (type === "number"){
            console.log(`OTP sent to your registered number ${response}`);
        } else {
            console.log("Invalid option");
        }
    }
}

sendNotification("email")("Click this link to change your password");
sendNotification("number")("Your 6 digit code - 234567, Dont share with anyone");
