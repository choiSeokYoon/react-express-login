const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
        userId: {
            type:String,
            require:true
        },
        text: {
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