import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {

  
  let emailInput = useRef();
  let passwordInput = useRef();

  let navigate = useNavigate()

 async function handleSubmit(e){
      e.preventDefault();

      let obj = {
       
        email:emailInput.current.value,
        password:passwordInput.current.value
      }
      console.log(obj)

      let res = await fetch('http://localhost:8090/users/login',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(obj)
      })

      let data = await res.json();
      if(res.status==200 || res.status==201){
        toast.success(data.msg);
        console.log(data)
        localStorage.setItem('g6Social',data.token)
        navigate('/')
      }
      else{
        toast.error(data.msg)
      }
  }

  return (
     <div className="flex md:flex-row flex-col items-center p-5 justify-center bg-black  h-[calc(100vh-65px)] bg-cover md:gap-0 gap-5">
     <div className="flex items-center px-20  ">
        <div>
          <h2 className="text-2xl  font-bold text-white sm:text-3xl">Your World. Your Network.</h2>
          <p className="max-w-xl mt-3 text-gray-300">
            Log in to continue connecting with your friends and exploring your feed.
          </p>
        </div> 
      </div>

<div className='bg-[url(https://free-3dtextureshd.com/wp-content/uploads/2024/04/39.jpg.webp)] bg-center'>

</div>
    <div className="flex w-[450px]  h-max bg-white/5 backdrop-blur-md  items-center p-6 ">
      <div className="flex-1">
        <div className="text-center">
          <div className="flex justify-center mx-auto">
            <h1 className='text-white font-extrabold text-2xl'>Social Media</h1>
          </div>
          <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
        </div>
        <div className="mt-8">
          <form>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
              <input ref={emailInput} type="email" name="email" id="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div className="mt-6">
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
               
              </div>
              <input ref={passwordInput} type="password" name="password" id="password" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
               <Link to="/forgetpassword" className="text-sm text-end my-3 text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</Link>
            </div>
            <div className="mt-6">
              <button onClick={handleSubmit} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-6 text-sm text-center text-gray-400">Don't have an account yet? <Link to="/register" className="text-blue-500 focus:outline-none focus:underline hover:underline">Register</Link>.</p>
        </div>
      </div>
    </div>
  
</div>
  )
}

export default Login
