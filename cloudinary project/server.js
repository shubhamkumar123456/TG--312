import express from 'express';
const app = express();
const port = 5000;
import cors from 'cors'
import {upload , cloudinary} from './middleware/multer.js';


app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("welcome page")
})


app.post('/uploads', upload.single('image'), (req,res)=>{
    console.log(req.file)  // {}
    res.json({msg:"uploaded successfully",image:req.file.path})
})

app.delete('/delete', async(req, res)=>{
    let {fileName} = req.body
    console.log(fileName)
    let response = await cloudinary.uploader.destroy(fileName);
    
    console.log(response);
    res.json({msg:"deleted successfully"})
})


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})