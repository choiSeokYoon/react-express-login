const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

//회원가입
router.post("/register", async (req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10)//bcrypt이 무작위로 생성된 문자열을 genSalt에 반환함 (10)길이 만큼
        const hashedPassword = await bcrypt.hash(req.body.password, salt)//bcrypt.hash 는 두개의 인자를 받음
        const newUser = new User({
            username: req.body.username,
            email:req.body.email,
            password:hashedPassword
        });
        const user =await newUser.save();
        res.status(200).send(user);
    }catch(err){
        console.log(err)
        res.status(500).send("서버 오류")
    }
})

module.exports = router