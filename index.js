const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    {useNewUrlParser: true, useUnifiedTopology: true},
    ()=>{
        console.log("MongoDB에 연결됨 ")
    }
);