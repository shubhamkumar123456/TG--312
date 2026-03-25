const mongoose = require('mongoose');


const connection = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/G6graphql')
        console.log('mongodb connected successfully')
    } catch (error) {
        console.log("error in connecting db")
    }
}

module.exports = connection