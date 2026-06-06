const doctorsModel = require("../models/doctors.model");

const getDoctors = (req, res) => {
    res.json(doctorsModel);
}

module.exports = {getDoctors};