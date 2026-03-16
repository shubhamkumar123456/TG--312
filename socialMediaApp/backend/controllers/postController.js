const postCollection = require('../models/postModel')

const createPost = async(req,res)=>{
    // res.send('create post function is running')
   try {
    // console.log(req.body);
    // console.log(req.file);
     const {title} = req.body

    const userId = req.user;
    let data = await postCollection.insertOne({
        title,
        file:req.file.filename,
        userId
    })

    res.status(201).json({msg:"post created successfully"})
   } catch (error) {
        res.status(500).json({msg:"error in creating post"})
   }
}

const getPost = async(req,res)=>{
    res.send('get post  is running')

1}

const getAllPosts = async(req, res)=>{
    try {
        let allposts = await postCollection.find().populate({path:'userId',select:'name profilePic'});
        return res.status(200).json({posts:allposts})
    } catch (error) {
        res.status(500).json({msg:"error in getting all post"})
    }
}

const getUserPosts = async(req, res)=>{
    let userId = req.user;
     try {
         let posts = await postCollection.find({userId:userId});
        return res.status(200).json({posts})
    } catch (error) {
        res.status(500).json({msg:"error in getting users posts"})
    }
}

const updatePost = async(req,res)=>{
    res.send('update post  function is running')
}

const deletePost = async(req,res)=>{
    res.send('delete post function is running')
}

module.exports =  {
    createPost,
    getPost,
    getAllPosts,
    updatePost,
    deletePost,
    getUserPosts
}