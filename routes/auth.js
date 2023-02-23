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
        const user =await newUser.save();//newUser를 디비에 저장함
        res.status(200).send(user);
    }catch(err){
        console.log(err)
        res.status(500).send("서버 오류")
    }
})

//로그인
router.post("/login", async (req,res)=>{
    try{
        const user = await User.findOne({email: req.body.email})//디비에서 사용자 이메일을 찾아봄
        if(!user){
            return res.status(404).send("없는 유저임")//이메일이 없으면 404오류를 띄움
        }
        const validPassword = await bcrypt.compare(//bcrypt.compare는 입력된 비밀번호와 저장된 암호화된 비밀번호를 비교하는 메서드
            req.body.password,
            user.password
        );
        if(!validPassword){
            return res.status(404).send("없는 비밀번호임")
        }
        res.status(200).send(user);
    }catch(err){
        console.log(err);
        res.status(500).send("서버 오류")
    }
})

module.exports = router