const express = require("express");
const app = express();
require("dotenv").config();

const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const dbConnection = require("./config/dbConnection.config");
const taskRoutes = require("./routes/task.route");
const userRoutes = require("./routes/authentication.routes");

app.use(express.json());
app.use("/tasks", taskRoutes);
app.use("/auth", userRoutes);

dbConnection();
app.listen(process.env.port, () => {
    console.log(`Server up and running on ${process.env.port}`);
});