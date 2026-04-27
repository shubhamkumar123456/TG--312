import express from 'express';
const app = express();
const port = 8090;

import {User, db, Posts} from './firebase.js'
import { addDoc , getDocs, updateDoc, deleteDoc , query, doc, where } from 'firebase/firestore';

app.use(express.json())
app.get('/',(req,res)=>{
    res.send('welcome page')
})


app.post('/register',async (req,res)=>{
    const {name , email, password} = req.body;
    
        let q = query(User,where("email", '==', email));
     let result = await getDocs(q);  //{}
        let ans = {...result.docs[0].data(),id:result.docs[0].id};  //{name , email , password}
        console.log(ans)

    console.log(ans)
     if(result.size > 0){
        return res.json({msg:"user already registered"})
     }
    let user  = await addDoc(User, {name, email, password});
    return res.json({msg:"user added successfully" });

})

app.listen(port , ()=>{
    console.log(`server is running on port ${port}`)
})