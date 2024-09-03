const express = require("express");
const app = express();
const cors = require("cors");
const dbConnection = require("./Config/dbConnection");
require('dotenv').config();


dbConnection.dbConnect();

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`);
})

app.use(cors());
