import express from 'express';
const app = express()
const port = 8080;
import cors from 'cors'



// middleware is a function that have the access of requesting to an object , responding to an object, they can also modify the request and response. they can also used between the routes. it have three arguments request , response and next

// app.use((req, res, next)=>{
    //     console.log("i am middleware")
    //     // res.send("i am middleware")
    //     next()
    // })
    app.use(cors())
    app.use(express.json())  //middleware ( parse the data)




app.get('/',(req,res)=>{
    res.send('welcome page') // used to send data in text form
    // res.json() used to send data in object form (multiple data in key value form)
})


app.get('/products',(req,res)=>{
    let arr = [
        {name:"iphone", price:80000, rating:4.5},
        {name:"iphone", price:80000, rating:4.5},
        {name:"iphone", price:80000, rating:4.5},
        {name:"iphone", price:80000, rating:4.5},
        {name:"iphone", price:80000, rating:4.5},
        {name:"iphone", price:80000, rating:4.5},
    ]

    res.json({products:arr});
})


// data send in body -->
app.post('/register',(req,res)=>{
    console.log(req.body)
    res.json({msg:"data recieve"})
})

// data send in body -->
app.post('/products',(req, res)=>{
    console.log(req.body);
    res.json({msg:"all ok"})
})


// data send using (/:variableName) params
// example -->localhost:8080/trial/10/hello
app.get('/trial/:a/:b', (req,res)=>{
    console.log(req.params)  ////gives you an object
    console.log(req.params.a)
    console.log(req.params.b)
    res.json({msg:"all ok"})
})

// data send through query  --> using ? mark
// example -->localhost:8080/trialOne?x=10&y=hello
app.get('/trialOne',(req,res)=>{
    console.log(req.query)  //gives you an object
    console.log(req.query.x)
    console.log(req.query.y)
    res.json({msg:"all good"})
})




// create a product api where admin(user) can send product detail from frontend. console the details in server and send response  (check api using both ways html and postman)

// https://github.com/shubhamkumar123456/TG--312.git

app.listen(port , ()=>{
    console.log("express server is running")
})