// Spread operator
let arr1 = [1, 2, 3];
let arr2 = [54, 22, 11, 63];
// let output = [...arr1, ...arr2, 100, 54];
let output = [45, 34, ...arr1];
// console.log(output);

// REST operator
// collect the rest of the things
function learner(name, email, ...skills) {
    console.log(name, email, skills);
}

// learner('Narasimhan', 'narasimhan@mail.com', 'html', 'css', 'bootstrap', 'js');

// REST - Realtime example
function generateBill(customerName, customerNumber, ...products) {
    console.log(customerName);
    console.log(customerNumber);
    console.log(products);
}

// generateBill('Narasimhan', '1234', 'Milk', 'Bread', 'Fruits');
// generateBill('Someone', '412341', 'vegetables', 'chocolates', 'groceries', 'pen', 'pencil');

// map()
const count = [1, 2, 3, 4];
const result = count.map((number) => {
    return number * 2;
});

console.log(result);

// map() - realtime logic
const usd = [10, 25, 50];
// 83
const inr = usd.map((dollar) => {
    return dollar * 83;
});
console.log(inr);

// filter()

const foods = [
    { id: 1, name: 'Paneer tikka', price: 250, veg: true, rating: 3 },
    { id: 1, name: 'Chicken tikka', price: 350, veg: false, rating: 4.5 },
    { id: 1, name: 'French Fries', price: 120, veg: true, rating: 4 }
];

// price based filter
const priceFilter = foods.filter((data) => {
    // return data.price < 150;
    return data.price > 200 && data.price <= 350;
});

console.log("Price Filter", priceFilter);

// category filter
const categoryFilter = foods.filter((data) => {
    return data.veg === true;
});

console.log("Category Filter", categoryFilter);

// rating filter
const ratingFilter = foods.filter((data) => {
    return data.rating > 4;
});

console.log("Rating Filter", ratingFilter);

// find()
const searchFood = foods.find((data) => {
    return data.name === "French Fries";
});

console.log("Search Food", searchFood);

// reduce()
const cart = [250, 300, 30, 50];

const totalPrice = cart.reduce((currentValue, nextValue) => {
    return currentValue + nextValue;
});
console.log(totalPrice);

// Interview Problem *
// Algorithm
// Sum of array
// [10, 20, 30];
// [5, 15, 25];
// 105

// pattern - 1: use spread operator to combine the arrays
// pattern - 2: use reduce method to sum the total value

let num1 = [10, 20, 30]; // 60
let num2 = [5, 15, 25]; // 45 }- 105

// pattern1
const combinedArrays = [...num1, ...num2];

// pattern2
const totalValues = combinedArrays.reduce((a, b) => {
    return a + b;
});

console.log(totalValues);