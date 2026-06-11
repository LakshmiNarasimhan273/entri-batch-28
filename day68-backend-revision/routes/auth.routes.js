const express = require("express");
const router = express.Router();

const authentication = require("../security/authentication.security");

// http://localhost:8080/api/auth/register
router.post("/register", authentication.registerApi);

// http://localhost:8080/api/auth/login
router.post("/login", authentication.loginApi);

module.exports = router;