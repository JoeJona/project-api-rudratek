const express = require("express");
const connectDB = require("./config.js");


const app = express();
app.use(express.json());

app.use("/api/projects", require("./routes/projectRoutes.js"));

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    connectDB();
});
