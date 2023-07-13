import React, { useContext, useEffect, useState } from "react"
import axios from 'axios'
import {AiFillPlayCircle, AiOutlineCloseCircle} from 'react-icons/ai'
import NoImg from './NoImage.jpg'
import './Movies.css'
import TrailerMovies from "./TrailerMovies"


function Movies() {
    const [moviesData, setMoviesData]= useState([])
    const [trailer, setTrailer] = useState(true)
    const [movieTitle, setMovieTitle] = useState('')
    // const input = inputValue
    // const Shown = input ? 'search' : 'discover'
    const Api = 'https://api.themoviedb.org/3/discover/movie'
    const Images = 'https://image.tmdb.org/t/p/w500/'

    const MovieCall = async () => {
        const data = await axios.get(Api, {
            params:{
                api_key: 'a8facaf99ff3df169da5a15b3a602100',
                // query: input
            }
        })
        const results = data.data.results
        setMoviesData(results)
    }
    useEffect(() => {
        setTimeout(() => {
            MovieCall()

        }, 100)
    }, [])

    const MoviesTitle = (movie) => {
        setMovieTitle(movie.title)
        setTrailer(!trailer)
    }

    return (
        <div>
            <div className="mainBgColor">
                <div className="movies-container">
                    {moviesData.map((movie) => {
                            return (
                        <div>
                            <div id={trailer ? "container" : "NoContainer"}>
                            <AiFillPlayCircle color='white' fontSize={40} id={trailer ? 'playIcon' : 'hide'} onClick={() => MoviesTitle(movie)}/>
                            <img src={movie.poster_path ? `${Images}${movie.poster_path}` : NoImg} alt=''onClick={() => MoviesTitle(movie)}/>
                            <h3 id={movie.title.length > 30 ? "smaller-Text" : ''} className="mainColor" >{movie.title}</h3>
                            </div>
                        </div>
                        )
                    })}
                    {trailer ? console.log : <TrailerMovies movieTitle={movieTitle}/>}
                        <AiOutlineCloseCircle id={trailer ? "Nothing" : "Exit1"} fontSize={55} color="white" cursor={'pointer'} onClick={() => setTrailer(true)}/>
                </div>
            </div>
        </div>
    )
}

export default Movies