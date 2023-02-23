const express = require("express");
const app = express();
const mongoose = require("mongoose");//몽고디비의 라이브러리로 데이터를 NODE에서 쉽게 관리하기 위함
const dotenv = require("dotenv");//환경변수
const helmet = require("helmet");//express의 보완성을 높여주는 미들웨어
const morgan = require("morgan");//express의 로그를 기록해줌

dotenv.config();
mongoose.set("strictQuery", true)

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB에 연결됨")
    }catch(err){
        console.log(err)
    }
}



app.listen(8080, ()=>{
    connect()
    console.log("서버가 실행중입니다.")
})