import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Var from './components/Var'
import Donate from './pages/Donate'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-red-200 w-full fixed h-[3.5em] flex justify-center items-center'> 
      <Var/>
    </div>
    <div className='pt-[3.5em]'>
      <Donate/>
      <About/>
      <Contact/>
    </div>
    </>
  )
}

export default App
