
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10);
const userCollection = require('../models/userModel')
const jwt = require('jsonwebtoken');
const jwt_secret = "johnCarter@123"


const registerUser = async(req, res)=>{
    // console.log(req.body);
    const   {name, email, password} = req.body
   try {
     let checkUser = await userCollection.findOne({email:email})  // 
    if(checkUser){
        // return res.json({msg:"user already registered", success:false})
        return res.status(401).json({msg:"user already registered"})
    }
    else{
        const hashPassword = bcrypt.hashSync(password, salt);
        let data = await userCollection.insertOne({name, email,password:hashPassword})
        // res.json({msg:"user registered successfully", success:true})
        res.status(201).json({msg:"user registered successfully"})
    }
   } catch (error) {
        res.status(500).json({msg:"error in creating user",error:error.message})
   }
}


const loginUser = async(req,res)=>{
    // res.send("login function is running")
    const {email , password} = req.body;  //password --> 123455

    let checkUser = await userCollection.findOne({email}); //{id, email, password} or null
    if(checkUser){
        // let comparePassword = await bcrypt.hash('originalPass', 'hashPass')
        let comparePassword = await bcrypt.compare(password, checkUser.password)//true or false
        if(comparePassword){
            let token = await jwt.sign({_id:checkUser._id} ,jwt_secret )//
            return res.json({msg:"user log in successfully" , data:checkUser,token})
        }
        else{
            return res.json({msg:"wrong password"})
        }
    }
    else{
        return res.json({msg:"user not found please signup"})
    }
}

const updateUser = async(req,res)=>{
    // res.send("update function is running");
    const {id} = req.params;
   
    const {name , password} = req.body ;
    try {
    
        if(password){
            var hashPassword = await bcrypt.hash(password, salt)
    }

        let data = await userCollection.updateOne({_id:id} , {$set:{name:name, password:hashPassword}})
        res.status(200).json({msg:"user updated successfully"})
    } catch (error) {
        res.status(500).json({msg:"error in updating user",error:error.message})
    }

}

const deleteUser = async(req,res)=>{
    console.log(req.params)
    // let {id} = req.params
     let token = req.headers.authorization
    console.log(token)
    let varify = jwt.verify(token,jwt_secret )
    console.log(varify)
    let data = await userCollection.deleteOne({_id:varify._id})
    res.json({msg:"user deleted successfully"})
}

module.exports = {
        registerUser,
        loginUser,
        updateUser,
        deleteUser
}