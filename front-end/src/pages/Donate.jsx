import React, {useState} from 'react'
import Pay from '../components/Pay'
import { use } from 'react'
function Donate() {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [amount, setAmount] = useState('')
    

    const txt_ref = ''
    const public_key = ''
  return (
    <div id='donate' className='bg-green-200 h-screen flex justify-center items-center'>
    <div className='bg-white w-[40em] h-[20em]'>
        <center>
        <label htmlFor="input">First Name</label><br/>
        <input onChange={(e)=>{setFname(e.target.value), console.log(fname)}} type="text" className='bg-red-400 mb-2'/><br/>
        <label htmlFor="input">last Name</label><br/>
        <input onChange={(e)=>{setLname(e.target.value),console.log(lname)}} type="text" className='bg-red-900 mb-2' /><br/>
        <label htmlFor="input">email</label><br/>
        <input onChange={(e)=>{setEmail(e.target.value),console.log(email)}} type="email" className='bg-red-100 mb-2' /><br/>
        <label htmlFor="input">amount</label><br/>
        <input onChange={(e)=>{setAmount(e.target.value),console.log(amount)}} type="number" className='bg-blue- mb-2' /><br/>
    <Pay/>
    </center>
    </div>
    </div>
  )
}

export default Donate