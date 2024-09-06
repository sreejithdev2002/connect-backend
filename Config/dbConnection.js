const mongoose = require("mongoose");
require("dotenv").config();

module.exports = {
    dbConnect: async()=>{
        try {
            await mongoose
            .connect(process.env.MONGODB)
            .then(()=>{
                console.log("MongoDB Connected Successfully");
            });
        } catch (error) {
            console.log(error);
        }
    }
};