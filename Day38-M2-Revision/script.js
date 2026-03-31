// array method - reduce()
let arr = [5, 3, 2, 1];
let reduceOutput = arr.reduce((a, b) => {
    return a + b;
    // 5 + 3 = 8
    // 8 + 2 = 10
    // 10 + 1 = 11
});
document.getElementById("reduce-output").innerText = reduceOutput;

const foodCart = [
    {id: 1, name: "dosa", price: 100},
    {id: 2, name: "idly", price: 50},
    {id: 3, name: "idly", price: 200}
];

const total = foodCart.reduce((acc, item) => acc + item.price, 0);
// acc - 0 + 100;
// 100 + 50;
document.getElementById("cart-output").innerText = `Total Food Cart ${total}`

// map method
let foods = ["Dosa", "Idly", "Burger"];

const list = document.getElementById("food-list");

// forEach - supports only in javascript
// map - supports both javascript and react
foods.map(data => {
    const li = document.createElement("li");
    li.innerText = data;
    list.appendChild(li);
});

let username = "Narasimhan"; // primitive data type
username = "Lakshmi Narasimhan";
// direct memory

// reference data type
let skills = ['html', 'css', 'js'];

let user = {
    name: "soemone",
    email: "someone@mail.com"
};


// API
// https://fakstoreapi.com/users
fetch("https://jsonplaceholder.typicode.com/users").then(response => {
    if(!response){
        throw new Error("Data Fetching failed");
    }
    return response.json();
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})

const condition = () => {
    if(2 === 2){
        console.log("Equal");
    } else {
        console.log("Not Equal");
    }
};

condition();