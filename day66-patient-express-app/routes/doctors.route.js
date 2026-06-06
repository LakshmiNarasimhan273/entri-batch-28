const express = require("express");
const router = express.Router();

const doctorController = require("../controllers/doctors.controller");

router.get("/", doctorController.getDoctors);

module.exports = router;