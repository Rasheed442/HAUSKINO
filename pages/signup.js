import Link from 'next/link'
import React, { useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader"
import Navbar from '../component/Navbar'
function signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [phone, setPhone] = useState()
    const [address, setAddress] = useState()
    const [loading, setLoading] = useState()
     async function handler(e){
       e.preventDefault();
       setLoading(true)
       const blogs = {name, email,password,phone,address}
       const response = await fetch ("https://beautybytas.onrender.com/signup", {
        method:"POST",
         headers:{"Content-Type": "application/json"},
        body: JSON.stringify(blogs)
       })
       const data = await response.json();
       setLoading(false)
       console.log(data)
     }
  return (
    <div className='bg-black'>
       <div>
            <div>
                 <Navbar/>

<form onSubmit={handler} className=' flex lg:justify-center'>   

      <div className='flex pl-20 flex-col bg-white border border-black rounded-2xl p-10 lg:w-1/3 text-white'>             
            <div className='flex flex-col gap-5'>
                <h1 className='text-5xl text-black font-semibold'>Sign up</h1>
                <p className='text-3xl text-black font-semibold'>Create a password to start a membership.</p>

                <input 
                value={name}
                onchange={(e)=> setName(e.target.value)}
                placeholder='NAME:' 
                className='w-40 outline-none border border-black text-black p-2 w-2/3 rounded' 
                type='text'/>

                <input 
                value={email}
                onchange={(e)=> setEmail(e.target.value)}
                placeholder='EMAIL:' 
                className='w-40 outline-none border border-black text-black p-2 w-2/3 rounded' 
                type='text'/>

                <input 
                value={password}
                onchange={(e) => setPassword(e.target.value)}
                placeholder='PASSWORD:'
                className='w-40 outline-none border border-black text-black p-2 w-2/3 rounded'
                type='password'/>

               <input 
                value={phone}
                onchange={(e)=> setPhone(e.target.value)}
                placeholder='PHONE:' 
                className='w-40 outline-none border border-black text-black p-2 w-2/3 rounded' 
                type='text'/>

               <input 
                value={address}
                onchange={(e)=> setAddress(e.target.value)}
                placeholder='ADDRESS:' 
                className='w-40 outline-none border border-black text-black p-2 w-2/3 rounded' 
                type='text'/>

            </div>

            <div className='flex pt-2 flex-col gap-3'>
                <button type='submit' className='bg-red-700 w-40 p-2 w-2/3 outline-none rounded'>{loading ? <ClipLoader color={"red"} loading={loading}  size={50}/>:"Get Started"}</button>
                <div className='flex gap-2'>
                    <input type='checkbox'/>
                    <p className='mt-5 text-black font-bold'>Please do not email me Netflix special offers.</p>
                </div>
            </div>

    </div>
    </form>
            

            </div>
         </div>
    </div>
  )
}

export default signup
