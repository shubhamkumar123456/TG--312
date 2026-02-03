import express from 'express';
const app = express()
const port = 8080;

app.get('/',(req,res)=>{
    res.send('welcome page') // used to send data in text form
    // res.json() used to send data in object form (multiple data in key value form)
})


app.listen(port , ()=>{
    console.log("express server is running")
})