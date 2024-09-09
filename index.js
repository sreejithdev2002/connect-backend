const express = require("express");
const app = express();
const cors = require("cors");
const dbConnection = require("./Config/dbConnection");
require('dotenv').config();
const UserRouter = require("./Router/UserRouter");
const bodyParser = require("body-parser");


dbConnection.dbConnect();

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`);
})

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use("/", UserRouter);
