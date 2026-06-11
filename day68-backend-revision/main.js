const express = require("express");
const app = express();

const authRoutes = require("./routes/auth.routes");
const courseRoutes = require('./routes/course.routes');

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/course", courseRoutes);

let port = 8080; // 3000, 3001, 8080, 8081, 8082

app.listen(port, () => {
    console.log(`Server up and running on ${port}`);
});