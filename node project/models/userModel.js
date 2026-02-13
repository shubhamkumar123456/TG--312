const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name:{
        type:String,
        minLength:2,
        maxLength:250,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:[true, 'password is required']
    }
},{timestamps:true})

let Users = mongoose.model('users' ,userSchema )
module.exports =  Users