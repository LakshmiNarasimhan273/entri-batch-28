const patientModel = require("../models/patient.model");

// method: GET
const getallPatients = (req, res) => {
    if (patientModel.length === 0) {
        res.json({ message: "No patient record created" });
    }
    res.json(patientModel);
}

// method: POST
const createPatient = (req, res) => {
    const { name, mobile, reason, isActive } = req.body;

    // validation

    const newPatient = {
        id: Date.now().toString(),
        name,
        mobile,
        reason,
        isActive
    };

    patientModel.push(newPatient);
    res.json({message: "Patient record created"});

}

// method: PUT
const updatePatient = (req, res) => {
    const id = req.params.id
    const { name, mobile, reason, isActive } = req.body;

    const searchPatient = patientModel.find(data => data.id === id);

    if(!searchPatient){
        return res.json({message: "Patient not found"});
    }

    // update logic
    searchPatient.name = name || searchPatient.name;
    searchPatient.mobile = mobile || searchPatient.mobile;
    searchPatient.reason = reason || searchPatient.reason;
    searchPatient.isActive = isActive || searchPatient.isActive;

    res.json({message: "Patient record updated"});

};

// method: DELETE
const deletePatient = (req, res) => {
    const id = req.params.id;

    const patient = patientModel.findIndex(data => data.id === id);
    // index -> 3

    if(patient === -1){
        return res.json({message: "Patient record not found"});
    }

    patientModel.splice(patient, 1);
    res.json({message: "Patient record removed"});
}

module.exports = { getallPatients, createPatient, updatePatient, deletePatient }