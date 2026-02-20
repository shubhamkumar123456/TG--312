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

userSchema.add({
    profilePic:{
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr3jhpAFYpzxx39DRuXIYxNPXc0zI5F6IiMQ&s"
    },
    coverPic:{
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiRRFw0-fuQJAHqMlujSR13hyiCAngEaNc0w&s"
    }
})

let Users = mongoose.model('users' ,userSchema )
module.exports =  Users