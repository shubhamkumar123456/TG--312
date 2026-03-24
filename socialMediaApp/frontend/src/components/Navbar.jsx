import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <div className='bg-[url(https://free-3dtextureshd.com/wp-content/uploads/2024/04/39.jpg.webp)]  bg-cover bg-center'>
  
  <div className='
    text-white
    bg-black/30
    backdrop-blur-3xl
    border border-white/10
    shadow-lg
    flex justify-between items-center
    px-6 py-3
    h-[65px]
  '>
    <h1 className='font-semibold text-lg text-xl font-bold'>SocialMedia</h1>

    <ul className='flex gap-8  h-full items-center'>
      <li ><Link className='hover:bg-orange-400 rounded p-3' to={'/'}>Home</Link></li>
      <li ><Link className='hover:bg-orange-400 rounded p-3' to={'/about'}>About</Link></li>
      <li ><Link className='hover:bg-orange-400 rounded p-3' to={'/contact'}>Contact</Link></li>
      <li ><Link className='hover:bg-orange-400 bg-orange-700 rounded p-3' to={'/login'}>Login</Link></li>
      <li ><Link className='hover:bg-orange-400 rounded p-3 bg-orange-700' to={'/register'}>Signup</Link></li>
    </ul>
  </div>

</div>
  )
}

export default Navbar
