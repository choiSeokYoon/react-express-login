const router = require("express").Router();
const User = require("../models/user.model");
const Post = require("../models/post.model");

router.post("/", async (req,res) => {
    try {
    const newPost = await Post.create(req.body);
    res.status(200).json(newPost);
    } catch(err) {
    res.status(500).json(err);
    }
})

router.get("/", async (req,res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch(err) {
        res.status(500).json(err);
    }
})

router.delete("/:id", async (req,res) => {
    try{
        const post = await Post.findById(req.params.id)
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("삭제 됐습니다.")
        }
    }catch(err){
        res.status(500).json(err)
    }
})





module.exports = router