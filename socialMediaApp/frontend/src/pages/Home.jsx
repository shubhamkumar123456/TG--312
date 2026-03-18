
import React, { useRef, useState } from 'react'
import { FcAddImage } from "react-icons/fc";
import EmojiPicker from 'emoji-picker-react';
import { BsEmojiLaughing } from "react-icons/bs";

const Home = () => {

  let inputRef = useRef()  //{current:undefined}

    let token = localStorage.getItem('g6Social')
    console.log(token)

    const [show, setshow] = useState(false);
    console.log(show)

    function handleEmojiShow(){
        setshow(!show)
    }


    function handleEmoji(e){
      // console.log(e)
      // console.log(e.emoji)
      let inputValue = inputRef.current.value
      // console.log(inputValue)

      let ans = inputValue + e.emoji
      console.log(ans)

      inputRef.current.value = ans
    }

  return (
    <div>

      <div className='w-[40%] relative mt-8 m-auto border p-4 rounded-2xl'>
           <div className='   gap-2  flex items-center mb-2'>
                <textarea ref={inputRef} className='border p-2 w-full outline-none rounded-2xl' name="" placeholder='whats in your mind..?' id=""></textarea>
                <button className='bg-green-900 px-3 py-1 hover:bg-black text-white rounded'>Post</button>

          </div>

      

          <input type="file" hidden id='file' />

             <div className='flex items-center gap-3'>
                  <label htmlFor="file">
                     <FcAddImage size={30}/>
                  </label>
                    <BsEmojiLaughing onClick={handleEmojiShow} color='blue' size={25}/>
             </div>
              
              <div className='absolute top-full'>
                <EmojiPicker onEmojiClick={handleEmoji} open={show} theme='dark'/>
              </div>
         
      </div>

        
    </div>
  )
}

export default Home


