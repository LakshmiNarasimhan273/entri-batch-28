const express = require("express");
const app = express();
require("dotenv").config();

const dbConnection = require("./config/dbConnection.config");


dbConnection();
app.listen(process.env.port, () => {
    console.log(`Server up and running on ${process.env.port}`);
});