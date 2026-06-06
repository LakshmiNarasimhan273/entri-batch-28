const express = require("express");
const app = express();
const patientRoutes = require("./routes/patient.route");
const doctorRoutes = require("./routes/doctors.route");

app.use(express.json());

// baseUrl || baseEndpoint
app.use("/patients", patientRoutes);
app.use("/doctors", doctorRoutes);

let port = 8080;

app.listen(port, () => {
    console.log(`Server up and running on ${port}`);    
});