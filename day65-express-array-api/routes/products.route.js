const express = require("express");
const router = express.Router();

const productController = require("../controllers/products.controller");

router.get("/", productController.getallProducts);

router.post("/create", productController.createProduct);

module.exports = router;