import Link from 'next/link'
import React, { useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader"
import Navbar from '../component/Navbar'
import style from '../styles/sign.module.css'
function signin() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState()
     async function handler(e){
       e.preventDefault();
       setLoading(true)
       const response = await fetch ("https://beautybytas.onrender.com/login", {
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({email, password})
       })
       const data = await response.json();
       setLoading(false)
      console.log(data)
       window.location='explore'
     }
  return (
    <div>
         <div className={style.container}>
            <div className={style.overlay}>
                 <Navbar/>

<form onSubmit={handler} className=' flex p-5 lg:justify-center'>   
      <div className='flex  flex-col lg:pb-20 p-10 1/3 bg-black text-white'>             
            <div className='flex flex-col gap-5'>
                <h1 className='text-xl lg:text-3xl lg:font-semibold'>Sign In</h1>

                <input 
                value={email}
                onchange={(e)=> setEmail(e.target.value)}
                placeholder='Email:' 
                className='w-40 outline-none text-black p-2 w-2/3 rounded' 
                type='text'/>

                <input 
                value={password}
                onchange={(e) => setPassword(e.target.value)}
                placeholder='Password:'
                  className='w-40 outline-none text-black p-2 w-2/3 rounded'
                   type='password'/>

            </div>

            <div className='flex pt-2 flex-col gap-3'>
                <button type='submit' className='bg-red-700 w-40 p-2 w-2/3 outline-none rounded'>{loading ? <ClipLoader color={"red"} loading={loading}  size={30}/>:"Get Started"}</button>
                <p>New to Netflix? <Link href='signup'><a className='text-blue-500'>Signup now</a></Link></p>
                <p>This page is protected by google reCAPTCHA to<br/>ensure you're not a bot. learn More</p>
            </div>

    </div>
    </form>
            

            </div>
         </div>
         
    </div>
  )
}

export default signin
