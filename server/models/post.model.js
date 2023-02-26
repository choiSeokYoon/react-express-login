const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
        userId: {
            type:String,
            require:true,
        },
        title:{
            type: String,
            required: true,
        },
        content:{
            type:String,
            max:500,
        },
        img: {
            type:String,
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("Post", PostSchema)