import Link from 'next/link'
import React, { useState } from 'react'
import style from "../styles/sign.module.css"
import ClipLoader from "react-spinners/ClipLoader"
import Navbar from '../component/Navbar'
function signin() {
   const [name, setName] = useState()
   const [email, setEmail] = useState()
   const [phone, setPhone] = useState()

   async function handler(e){
    e.preventDefault();
    const blogs = {name,email,phone}
    const response = await fetch ("https://x8ki-letl-twmt.n7.xano.io/api:oEREOWJG/lead",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(blogs)
    })
    const data = await response.json();
    console.log(data)
   }
  return (
    <div className={style.container}>
      <div className={style.overlay}>
       <Navbar/>

  <div className={style.header}>
    <form onSubmit={handler}>
     <div className={style.main}>
        <h1>Sign in</h1>
        <div className={style.flex}>
         
          <input
          value={name}
          onChange={(e)=> setName(e.target.value)}
          placeholder='Name' type="text"/>
          <input
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          placeholder='email' type="text"/>
          <input
            value={phone}
            onChange={(e)=> setPhone(e.target.value)}
          placeholder='password' type="password"/>
        </div>

        <div className={style.main}>
        <button type='submit'>Sign in</button>
        <p style={{cursor:"pointer"}}><span style={{color:"gray"}}>New to netflix ?</span> Sign up now</p>
        <p>This page is protected bt google reCAPTCHA to<br/> ensure you're not a bot. Learn more</p>
        </div> 
     </div></form>
  </div>   

      </div>
    </div>
  )
}

export default signin
