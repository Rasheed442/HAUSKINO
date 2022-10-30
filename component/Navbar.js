import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
function Navbar() {
  return (
    <div>
       <div className={styles.header}>
        <Link href='/'><a className={styles.hauskino}>HAUSKINO</a></Link>
            <Link href='signin'><a className={styles.sign}>Sign In</a></Link>
        </div>
    </div>
  )
}

export default Navbar
