const express = require("express");
const router = express.Router();

const authentication = require("../security/auth.security");

// http://localhost:8080/auth/register
router.post("/register", authentication.registerApi);
router.post("/login", authentication.loginApi);

module.exports = router;