const productModel = require("../models/products.model");

// API LOGICS

// method: GET
const getallProducts = (req, res) => {

    if(productModel.length === 0){
        return res.json({message: "No products found"});
    }

    res.json(productModel);
};

// method: POST
const createProduct = (req, res) => {
    const { title, price, category } = req.body;

    if(!title || title.trim() === ""){
        return res.json({message: "Title is required"});
    }

     if(!price){
        return res.json({message: "Price is required"});
    }

     if(!category || category.trim() === ""){
        return res.json({message: "Category is required"});
    }

    const newProduct = {
        id: Date.now().toString(),
        title,
        price,
        category
    }

    productModel.push(newProduct);
    res.json({message: "Product Added"});

};

module.exports = {getallProducts, createProduct};