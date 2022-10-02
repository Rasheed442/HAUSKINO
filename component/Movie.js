import React from 'react'

function Movie({image}) {
  return (
    <div>
      <img className='rounded-2xl transition cursor-pointer w-80' src={image}/>
    </div>
  )
}

export default Movie
