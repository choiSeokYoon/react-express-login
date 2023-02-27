const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username:{
            type:String,//문자열
            require:true, //필수 입력
            min: 2, //최소 입력값
            max: 30, //최대 입력값
            unique:true //유일성
        },
        email:{//이메일
            type:String,
            require:true,
            min:3,
            max:60,
            unique:true
        },
        password:{
            type:String,
            require:true,
            min:6,
        },
    },
    { timestamps: true }//생성일과 수정일을 자동으로 디비에 저장해줌
);

module.exports = mongoose.model("User", UserSchema)