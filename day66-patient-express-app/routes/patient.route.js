const express = require("express");
const router = express.Router();

const patientController = require("../controllers/patient.controller");

// http://localhost:8080/patients
router.get("/", patientController.getallPatients);

// http://localhost:8080/patients/create
router.post("/create", patientController.createPatient);

// http://localhost:8080/patients/12351345
router.put("/:id", patientController.updatePatient);

// http://localhost:8080/patients/14513451
router.delete("/:id", patientController.deletePatient);

module.exports = router;