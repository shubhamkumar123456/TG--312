
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10);
const userCollection = require('../models/userModel')


const registerUser = async(req, res)=>{
    // console.log(req.body);
    const   {name, email, password} = req.body
    let checkUser = await userCollection.findOne({email:email})  // 
    if(checkUser){
        return res.json({msg:"user already registered"})
    }
    else{
        const hashPassword = bcrypt.hashSync(password, salt);
        let data = await userCollection.insertOne({name, email,password:hashPassword})
        res.json({msg:"user registered successfully"})
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
            return res.json({msg:"user log in successfully" , data:checkUser})
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
    res.send("update function is running")
}

const deleteUser = async(req,res)=>{
    console.log(req.params)
    let {id} = req.params
    let data = await userCollection.deleteOne({_id:id})
    res.json({msg:"user deleted successfully"})
}

module.exports = {
        registerUser,
        loginUser,
        updateUser,
        deleteUser
}