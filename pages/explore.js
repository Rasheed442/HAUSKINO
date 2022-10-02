import React from 'react'
import Movie from '../component/Movie'
import Navbar from '../component/Navbar'
import style from '../styles/explore.module.css'
function explore({movie}) {
    console.log(movie)
  return (
    <div>
        
       <div className={style.container}>
          <div className={style.overlay}>
             <Navbar/>

              <div className='p-20 flex flex-col gap-5'>
                <p className='text-white text-5xl font-bold '>Watch Joker Now</p>
                <p className='text-white text-xl'> Arthur Fleck lives with and cares for his mother, Penny, in crime-ridden and economically stagnant Gotham City.
             Arthur suffers from a neurological disorder that causes him to laugh uncontrollably at inappropriate times, requiring medication, 
             for which he depends on social services. After Arthur is attacked by juvenile delinquents, his co-worker Randall gives him a revolver 
             for self-defense. Arthur pursues a relationship with his neighbor, single mother Sophie, and invites her to see his routine at Pogo's 
             comedy club. At a children's hospital, Arthur's revolver falls out of his coat in full view of the 
             children</p>
              <button className='text-white bg-red-500 cursor-pointer w-40 transition hover:bg-red-700 p-2 rounded font-semibold'>Play Now</button>
              </div>
            </div>
       </div>

          <div className='bg-black'>
              <p className='text-blue-500 text-5xl font-bold p-20'>Popular Movies</p>

              <div className='grid grid-cols-5 p-10 gap-5'>
                {movie.items.map((movies) => {
                    return (
                    <Movie
                    image={movies.image}
                    />
                    )
                })}
         </div>     
         </div>
    </div>
  )
}

export default explore
export async function getServerSideProps(){
    const response = await fetch ("https://imdb-api.com/en/API/MostPopularMovies/k_pbpvpa5d")
    const movie = await response.json();

    return {
        props:{
            movie
        }
    }
}
