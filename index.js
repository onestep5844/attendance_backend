const express = require("express");
const mongoose = require("mongoose");
const app = express();
const employeeRouter = require('./Routes/employeeRoute')
const userRouter = require('./Routes/userRoute')
const dotenv = require("dotenv");
var bodyParser = require("body-parser");
var cors = require('cors')

dotenv.config();
app.use(cors());

const DB = process.env.dbURI

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/user", userRouter)
app.use("/api/emp",employeeRouter)




mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection

db.on("error", (err) => {
    console.log(err);
})

db.once("open", () => {
    console.log("DB Connected Succesfully");
})

app.listen(5000, () => {
    console.log("Server is running at port 5000");
})