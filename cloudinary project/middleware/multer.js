import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
    cloud_name:"dsftyrbh0",
    api_key:"397473827185933",
    api_secret:"5Bn3WfJQzVhoD5fzU742scy65nc"
})

const storage = new CloudinaryStorage({
    cloudinary,
    params:{
        folder:"G6uploads",
        resource_type:'auto',
        // allowed_formats:['jpg', 'png']
    }
})

const upload = multer({storage});
export  {upload, cloudinary}

