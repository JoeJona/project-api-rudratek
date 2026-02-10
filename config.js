const mongoose = require("mongoose");

MONGO_URI = 'mongodb://localhost:27017/ProjectDB'

const connectDB = async () => {
    await mongoose.connect(MONGO_URI).then(() => {
        console.log("MongoDB connected");
    }).catch((error) => console.error(error))
};

module.exports = connectDB;
