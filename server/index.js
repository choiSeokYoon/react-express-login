const express = require("express");
const app = express();
const mongoose = require("mongoose");//몽고디비의 라이브러리로 데이터를 NODE에서 쉽게 관리하기 위함
const dotenv = require("dotenv");//환경변수
const helmet = require("helmet");//express의 보완성을 높여주는 미들웨어
const morgan = require("morgan");//express의 로그를 기록해줌
const cors =require("cors");
const authRoute = require("./routes/auth")
/* const userRoute = require("./routes/users") */

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


//미들웨어
app.use(express.json())
app.use(helmet());
app.use(cors())
app.use(morgan("common"))//common 형식이 일반적으로 사용됨

//라우터
app.use("/api/auth", authRoute)
/* app.use("/api/users", userRoute) */


app.listen(8080, ()=>{
    connect()
    console.log("서버가 실행중입니다.")
})