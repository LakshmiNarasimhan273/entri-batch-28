const express = require("express");
const app = express();
const productRoutes = require("./routes/products.route");

app.use(express.json());

app.use("/products", productRoutes);

let port = 8080;

app.listen(port, () => {
    console.log(`Server up and running on ${port}`);    
});