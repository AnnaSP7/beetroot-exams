import React, { useEffect, useState } from "react"
import {AiFillPlayCircle} from 'react-icons/ai'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import NoImg from './NoImage.jpg'
import axios from 'axios'
import './Movies.css'
import TrailerMovies from './TrailerMovies.jsx'

function TvShows() {
    const [showData, setShowData] = useState([])  
    const [trailer, setTrailer] = useState(true)
    const [title, setTitle] = useState('')
    const Api = 'https://api.themoviedb.org/3/discover/tv'
    const Images = 'https://image.tmdb.org/t/p/w500/'

    const TvShows = async () => {
        const data = await axios.get(Api, {
            params: {
                api_key: 'a8facaf99ff3df169da5a15b3a602100'
            }
        })
        const results = (data.data.results)
        setShowData(results)
    }

    useEffect(() => {
        setTimeout(() => {
            TvShows()

        }, 100)
    }, [])

    console.log(showData)
    const TvShowTitle = (shows) => {
        setTitle(shows.name)
        setTrailer(!trailer)
    }
    return (
        <div className="mainBgColor">
            <div className="movies-container">
                {showData.map((shows) => {
                    return(
                        <div key={shows.id}>
                            <div id={trailer ? "container" : "NoContainer"}>
                                <AiFillPlayCircle color="white" fontSize={40} id={trailer ? "playIcon" : "hide"} onClick={() => TvShowTitle(shows)}/>
                                <img src={shows.poster_path ? `${Images}${shows.poster_path}` : NoImg} alt="" onClick={() => TvShowTitle(shows)}/>
                                <h3 id={shows.name.length > 30 ? 'smallerText' : ''} className="mainColor">{shows.name}</h3>
                            </div>
                        </div>
                    )
                })}
                {trailer ? console.log : <TrailerMovies title={title}/>}
                <AiOutlineCloseCircle id={trailer ? "Nothing" : "Exit1"} fontSize={55} color="white" cursor={'pointer'} onClick={() => setTrailer(true)}/>
            </div>
        </div>
    )
}

export default TvShows