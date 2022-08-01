const mongoose = require("mongoose");

const connectToDatabase = () => {
    //connects to the mongoDB database
    mongoose.connect("mongodb://localhost:27017/scaler", () => {
        console.log("connectd to database");
    });
};