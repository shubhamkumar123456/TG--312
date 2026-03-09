import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-amber-500 flex justify-between p-3'>
      <h1>SocialMedia</h1>

      <ul className='flex gap-3'>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
        <li><Link to={'/login'}>Login</Link></li>
        <li><Link to={'/register'}>Signup</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
