const express = require("express");
const app = express();

const userRoutes = require("./routes/users.routes");
const productRoutes = require("./routes/products.routes");

app.use(userRoutes);
app.use(productRoutes);

let port = 8080;


/* app.get("/users", (req, res) => {
    res.json({message: "User Data"});
});


app.get("/products", (req, res) => {
    res.json({message: "Products Data"});
}); */


app.listen(port, () => {
    console.log(`Server up and running on ${port}`);    
});

// http://localhost:8080/users (api link)
// https://fakestoreapi.com/users (endpoints)
// https://fakestoreapi.com/products (endpoints)

// Architecture
// - controllers (logics - javascript function)
// - routes (it converts the javascript logic function into api routes)