const express = require("express");
const app = express();

const authRoutes = require("./routes/users.routes");

app.use(express.json());
app.use("/auth", authRoutes);

let port = 8080;

app.listen(port, () => {
    console.log(`Server running on ${port}`);    
});