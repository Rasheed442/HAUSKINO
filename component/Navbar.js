import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
function Navbar() {
  return (
    <div>
       <div className={styles.header}>
        <Link href='/'><a className='text-3xl text-blue-500 font-bold'>HAUSKINO</a></Link>
            <Link href='signin'><a className='bg-red-700 p-2 rounded text-xl'>Sign In</a></Link>
        </div>
    </div>
  )
}

export default Navbar
