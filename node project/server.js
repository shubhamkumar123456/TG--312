const express = require('express');
const app = express();
const port = 8090;

const mongodbConnection = require('./config/db')  //function
const userCollection  = require('./models/userModel')

mongodbConnection()

app.use(express.json())  //
app.get('/',(req, res)=>{
    res.send('welcome page')
})

// 
app.post('/register', async(req, res)=>{
    // console.log(req.body);
    const   {name, email, password} = req.body
    let checkUser = await userCollection.findOne({email:email})  // 
    if(checkUser){
        return res.json({msg:"user already registered"})
    }
    else{
        let data = await userCollection.insertOne({name, email,password})
        res.json({msg:"user registered successfully"})
    }
    
})


app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})