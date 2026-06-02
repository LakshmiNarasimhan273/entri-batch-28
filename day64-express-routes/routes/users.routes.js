const express = require("express");
const router = express.Router();

// controller import
const userController = require("../controllers/users.controller");

router.get("/users", userController.getusers);

module.exports = router;