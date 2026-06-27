const express = require("express");
const router = express.Router();

const authentication = require("../security/authentication.security");

// http://localhost:8080/auth/register
router.post("/register", authentication.registerUser);

module.exports = router;