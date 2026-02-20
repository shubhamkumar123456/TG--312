const express = require('express');
const app = express();
const port = 8090;

const mongodbConnection = require('./config/db')  //function
const userCollection  = require('./models/userModel')


mongodbConnection()


// import files
const userRouter = require('./routes/userRoutes')

app.use(express.json())  //
app.get('/',(req, res)=>{
    res.send('welcome page')
})


// 
// app.post('/register', async(req, res)=>{
//     // console.log(req.body);
//     const   {name, email, password} = req.body
//     let checkUser = await userCollection.findOne({email:email})  // 
//     if(checkUser){
//         return res.json({msg:"user already registered"})
//     }
//     else{
//         let data = await userCollection.insertOne({name, email,password})
//         res.json({msg:"user registered successfully"})
//     }
    
// })


app.use('/users',userRouter)

// example --> http://localhost:8090/users/register , --> registerUser function will run





app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})