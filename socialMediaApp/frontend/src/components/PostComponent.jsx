import React, { useContext, useRef, useState } from 'react'
import { FcAddImage } from "react-icons/fc";
import EmojiPicker from 'emoji-picker-react';
import { BsEmojiLaughing } from "react-icons/bs";
import { toast } from 'react-toastify';
import UserContext from '../context/UserContext';


const PostComponent = () => {

  let ctx = useContext(UserContext);
  console.log(ctx)

    const [show, setshow] = useState(false);
    const [image, setimage] = useState(''); //''
    let inputRef = useRef()  //{current:undefined}


    let token = localStorage.getItem('g6Social')
    // console.log(token)


    // console.log(show)

    function handleEmojiShow() {
        setshow(!show)
    }


    function handleEmoji(e) {
        // console.log(e)
        // console.log(e.emoji)
        let inputValue = inputRef.current.value
        // console.log(inputValue)

        let ans = inputValue + e.emoji
        console.log(ans)

        inputRef.current.value = ans
    }



    function handleInputChanger(e) {
        console.log(e.target) //tag
        console.log(e.target.files) //filelist {0:firstFileObject, 1:secondFileObject}
        console.log(e.target.files[0]) // firstFileObject
        setimage(e.target.files[0])
    }


    async function handleSubmit() {
        let formData = new FormData();
        formData.append('title', inputRef.current.value)
        formData.append('image', image);

        let res = await fetch('http://localhost:8090/posts/create', {
            method: 'POST',
            headers: {
                'authorization': token
            },
            body: formData
        });

        let data = await res.json();
        console.log(data)
        toast.success(data.msg)
        inputRef.current.value = '';
        setimage('')

    }

    // return <div>
    //     <div className='w-[40%] relative mt-8 m-auto border p-4 rounded-2xl'>
    //         <div className='   gap-2  flex items-center mb-2'>
    //             <textarea ref={inputRef} className='border p-2 w-full outline-none rounded-2xl' name="" placeholder='whats in your mind..?' id=""></textarea>
    //             <button onClick={handleSubmit} className='bg-green-900 px-3 py-1 hover:bg-black text-white rounded'>Post</button>

    //         </div>



    //         <input onChange={handleInputChanger} type="file" hidden id='file' />

    //         <div className='flex items-center gap-3'>
    //             <label htmlFor="file">
    //                 <FcAddImage size={30} />
    //             </label>
    //             <BsEmojiLaughing onClick={handleEmojiShow} color='blue' size={25} />
    //         </div>

    //         <div className='absolute top-full'>
    //             <EmojiPicker onEmojiClick={handleEmoji} open={show} theme='dark' />
    //         </div>

    //         {image && <div>
    //             <img className='w-[150px] h-[150px]' src={URL.createObjectURL(image)} alt="" />
    //         </div>}



    //     </div>

    // </div>
    return<div className="bg-gray-100 relative flex justify-center items-center mt-4">
  <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-4">
  
    <div className="flex items-center gap-3 mb-4">
      <img src={ctx.userData?.user?.profilePic} className="w-10 border p-1 h-10 rounded-full" />
      <input ref={inputRef} id="postText" type="text" placeholder="What's on your mind?" className="w-full bg-gray-100 rounded-full px-4 py-2 outline-none" />
    </div>
   
  {image &&  <div id="previewContainer" className="mb-4">
      <img id="previewImage" src={URL.createObjectURL(image)} className="w-full object-contain object center rounded-xl max-h-80" />
    </div>}


    
    <div className="flex justify-between items-center border-t pt-3">
     
      <label className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-blue-600">
        📷 Photo
        <input onChange={handleInputChanger} type="file" accept="image/*" className="hidden"  />
      </label>
     
      <button onClick={handleEmojiShow} className="text-gray-600 hover:text-yellow-500">
        😊 Feeling
      </button>
      <div className='absolute z-40 top-full'>
                <EmojiPicker onEmojiClick={handleEmoji} open={show} theme='dark' />
             </div>
     
      <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full">
        Post
      </button>
    </div>
  </div>
</div>

}

export default PostComponent