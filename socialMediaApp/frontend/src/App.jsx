
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import { useContext, useEffect } from 'react'
import UserContext from './context/UserContext'
import ForgetPassword from './pages/ForgetPassword'

function App() {

  let token = localStorage.getItem('g6Social');
  
  let ctx = useContext(UserContext);
  console.log(ctx)  //

  useEffect(()=>{
      if(token){
        ctx.getUserData()
      }
  },[token])

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/'  element={<Home/>}/>
                <Route path='/about'  element={<About/>}/>
                <Route path='/contact'  element={<Contact/>}/>
                <Route path='/register'  element={<Signup/>}/>
                <Route path='/login'  element={<Login/>}/>
                <Route path='/forgetpassword'  element={<ForgetPassword/>}/>

            </Routes>
            <ToastContainer/>
      </BrowserRouter>

    </div>
  )
}

export default App
