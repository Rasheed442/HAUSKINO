import React from 'react'
import style from '../styles/explore.module.css'
function Movie({Image}) {
  return (
    <div>
       <div className={style.movie}>
         <img src={Image} alt=""/>
       </div>
    </div>
  )
}

export default Movie