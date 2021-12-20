//hey there! this is a excerise tracker rest api
//ver 1.0
//made by: blurryface

//importing express
const express = require("express");

//middlewares
const cors = require("cors");
const mongoose = require("mongoose");

//actually using dotenv to import the environment variables
require('dotenv').config();

//initializing express app
const app = express()
const port = process.env.PORT || 5000

//somekind of security protocol idk
app.use(cors());
app.use(express.json());

//importing the URI form dotenv
const uri = process.env.MONGODB_URI
mongoose.connect(uri,{
    useNewUrlParser:true
})

//connecting to the database perhaps
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database connection established successfully!")
})

//importing the routers from the routes folder
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises",exercisesRouter);
app.use("/users",usersRouter);

//listening to the port OwO
app.listen(port,()=>{
    console.log(`Server is running at localhost:${port}/`)
})