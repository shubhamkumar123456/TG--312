import React, { useRef, useState } from 'react'
import { FcAddImage } from "react-icons/fc";
import EmojiPicker from 'emoji-picker-react';
import { BsEmojiLaughing } from "react-icons/bs";
import { toast } from 'react-toastify';


const PostComponent = () => {
    const [show, setshow] = useState(false);
    const [image, setimage] = useState(''); //''
    let inputRef = useRef()  //{current:undefined}


    let token = localStorage.getItem('g6Social')
    console.log(token)


    console.log(show)

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

    return <div>
        <div className='w-[40%] relative mt-8 m-auto border p-4 rounded-2xl'>
            <div className='   gap-2  flex items-center mb-2'>
                <textarea ref={inputRef} className='border p-2 w-full outline-none rounded-2xl' name="" placeholder='whats in your mind..?' id=""></textarea>
                <button onClick={handleSubmit} className='bg-green-900 px-3 py-1 hover:bg-black text-white rounded'>Post</button>

            </div>



            <input onChange={handleInputChanger} type="file" hidden id='file' />

            <div className='flex items-center gap-3'>
                <label htmlFor="file">
                    <FcAddImage size={30} />
                </label>
                <BsEmojiLaughing onClick={handleEmojiShow} color='blue' size={25} />
            </div>

            <div className='absolute top-full'>
                <EmojiPicker onEmojiClick={handleEmoji} open={show} theme='dark' />
            </div>

            {image && <div>
                <img className='w-[150px] h-[150px]' src={URL.createObjectURL(image)} alt="" />
            </div>}



        </div>

    </div>
}

export default PostComponent