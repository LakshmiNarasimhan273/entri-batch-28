// Data Types

// primitive data type
// reference data type (non-primitive)

// primitive data type
// string, number, boolean, undefined, bigInt, null

let username = "Narasimhan";
console.log(typeof username); // string

let age = 29;
console.log(typeof age); // number

let isMentor = true;
console.log(typeof isMentor); // boolean

let salary = undefined;
console.log(typeof salary); // undefined

let count = 19873461932746192374n;
console.log(typeof count); //bigint

let percentage = null;
console.log(typeof percentage); // null -> 0

// Reference Data Type (non-primitive)
// object, array, function

// object
let user = {
    // key: value
    name: "Narasimhan",
    role: "Mentor",
    org: "Entri",
    year: 2026,
    active: true
};
console.log(typeof user.active);

// array
let skills = ["html", "css", "javascript", "bootstrap", 8, false];
console.log(Array.isArray(skills));

// Real-time problem
// laptop, mobile, chair
// Array of Objects
let products = [
    {title: "laptop", price: 55000, stock: true},
    {title: "mobile", price: 25000, stock: false},
    {title: "chair", price: 1000, stock: true},
];

console.log(Array.isArray(products));

// function
function welcome(){
    console.log("Welcome User");
    console.log("You're logged in");
    console.log("Access your last work");
};

welcome();
welcome();

// Real-time Object Creation
// eg. Entri Learner Data Management

let learner = {
    learnerName: "Narasimhan",
    learnerAge: 29,
    course: "AI enhanced FSD",
    learnerNumber: 7010036699,
    learnerEmail: "narasimhan@mail.com",
    isActive: true,
    isCompleted: undefined,
    skillsLearned: ["html", "css", "bootstrap", "dialogflow", "git&github", "javascript"],
    dateInfo:{
        joiningDate: "19th Feb",
        paymentDate: "19th Feb"
    }
};

console.log(learner);