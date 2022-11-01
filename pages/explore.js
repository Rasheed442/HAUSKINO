import React,{useState} from 'react'
import Navbar from '../component/Navbar'
import style from "../styles/explore.module.css"
import Image from 'next/image'
import Link from "next/link"
import Movie from "../component/Movie"
function Explore({data}) {
  console.log(data)
  return (
    <>
        <div className={style.container}>
         <Link  href='/'><h2 style={{cursor:"pointer"}}>HAUSKINO</h2></Link> 
       

        <div className={style.main}>
          <h1>Watch Joker Now</h1>
          <p>Joker is a 2019 American psychological thriller film directed by Todd Phillips, 
            who also co-wrote the screenplay with Scott Silver.<br/> The film, based on DC Comics characters, 
            stars Joaquin Phoenix as the Joker and serves as a standalone origin story for the character.<br/>
            Set in 1981, it follows Arthur Fleck, a failed clown and aspiring stand-up comedian whose descent 
            into insanity and nihilism inspires a<br/> violent countercultural revolution against the wealthy in a 
          decaying Gotham City.Robert De Niro, Zazie Beetz, and Frances Conroy appear in supporting roles.</p>
          <button onClick={()=> setOpen(true)}>Play</button>
        </div>

        <div className={style.scene}>
          {data.items.map((datas)=>{
             const loop = datas.image
              for(let i=0; i < loop.length; i++){
                if(i==10){
                  break;
                }
              }
            return(
             
              <div>
                  <Movie
                  Image={datas.image}
                  />
              </div>
            )
          })}
        </div>
     </div>
    </>
  )
}

export default Explore

export async function getServerSideProps(){
    const response = await fetch ("https://imdb-api.com/en/API/MostPopularMovies/k_pbpvpa5d")
    const data = await response.json();

    return {
      props :{
        data
      }
    }
}
