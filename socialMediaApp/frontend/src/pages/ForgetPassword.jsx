import React, { useRef } from 'react'

const ForgetPassword = () => {

    let inputRef = useRef();  // {current:undefined}  , {current:<input/>}

   async function handleSubmit(){
        let obj ={
            email : inputRef.current.value
        }
        console.log(obj)
        // now send this object in backend using api  --> 
        let res = await fetch('http://localhost:8090/users/forgetpassword',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(obj)
        })

        let data = await res.json();
        console.log(data)
    }

  return (
    <div className='flex justify-center items-center h-[70vh]'>
        <div className='flex items-center gap-4'>
            <input ref={inputRef} type="email" className='p-2 rounded border' placeholder='enter your email' />
            <button onClick={handleSubmit} className='bg-green-900 hover:bg-green-600 text-white px-2 py-1 rounded'>submit</button>
        </div>
    </div>
  )
}

export default ForgetPassword
