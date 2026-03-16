
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { ToastContainer, toast } from 'react-toastify';

function App() {


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
            </Routes>
            <ToastContainer/>
      </BrowserRouter>

    </div>
  )
}

export default App
