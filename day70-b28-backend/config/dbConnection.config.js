const mongoose = require("mongoose");

const dbConnection = async () => {
    try{
        // connection
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected");
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
};

module.exports = dbConnection;