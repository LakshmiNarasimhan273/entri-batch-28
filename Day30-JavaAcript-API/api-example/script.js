// API Call
const apiUrl = "https://fakestoreapi.com/products?limit=5";

// fetch("https://fakestoreapi.com/products")
fetch(apiUrl).then(response => { // data processor
    // response parameter variable takes the data from fetch method
    if(!response){
        throw new Error("Data Fetching Failed");
    }

    return response.json();
    // json() -> convert the json data into javascript object
    
}).then(products => { // output processor
    console.log("Fake Store API - Products", products);
}).catch(err => {
    console.log(err.message);
});

const recipesUrl = "https://dummyjson.com/recipes";

fetch(recipesUrl).then(response => { // data processor
    // response parameter variable takes the data from fetch method
    if(!response){
        throw new Error("Data Fetching Failed");
    }

    return response.json();
    // json() -> convert the json data into javascript object
    
}).then(products => { // output processor
    console.log("Dummy json - Recipes", products);
}).catch(err => {
    console.log(err.message);
});

const todoUrl = "https://jsonplaceholder.typicode.com/todos"

fetch(todoUrl).then(response => { // data processor
    // response parameter variable takes the data from fetch method
    if(!response){
        throw new Error("Data Fetching Failed");
    }

    return response.json();
    // json() -> convert the json data into javascript object
    
}).then(products => { // output processor
    console.log("Json API Todo", products);
}).catch(err => {
    console.log(err.message);
});