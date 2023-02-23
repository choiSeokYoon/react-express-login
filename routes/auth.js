const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

//회원가입
/* router.post("/register", async (req,res)=>{

}) */

module.exports = router