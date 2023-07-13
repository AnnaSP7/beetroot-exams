import axios from "axios"
import React, { useEffect, useState } from "react"

import {AiFillPlayCircle} from 'react-icons/ai'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import NoImg from './NoImage.jpg'
import './Movies.css'
import TrailerMovies from './TrailerMovies.jsx'

function Trends() {
    const Api = 'https://api.themoviedb.org/3'
    const Images = 'https://image.tmdb.org/t/p/w500/'

    const TrendsShown = '/trending/all/week'
    const [trendArray, setTrendArray] = useState([])
    const [trailer, setTrailer] = useState(true)
    const [trendTitle, setTrendTitle] = useState('')

    const Trends = async() => {
        const data = await axios.get(`${Api}${TrendsShown}`, {
            params: {
                api_key: 'a8facaf99ff3df169da5a15b3a602100'
            }
        })
        const results = (data.data.results)
        setTrendArray(results)
    }

    useEffect(() => {
        setTimeout(() => {
            Trends()
        }, 100)
    }, [])

    const TrendTitle = (trend) => {
        setTrendTitle(trend.title)
        setTrailer(!trailer)
    }

    return (
        <div>
            <div className="mainBgColor">
            <div className="movies-container">
                {trendArray.map((trend) => {
                    return(
                        <div>
                            <div id={trailer ? "container" : "NoContainer"}>
                                <AiFillPlayCircle color="white" fontSize={40} id={trailer ? "playIcon" : "hide"} onClick={() => TrendTitle(trend)}/>
                                <img src={trend.poster_path ? `${Images}${trend.poster_path}` : NoImg} alt="" onClick={() => TrendTitle(trend)}/>
                                <h3 id='smallerText' className="mainColor">{trend.title}</h3>
                            </div>
                        </div>
                    )
                })}
                {trailer ? console.log : <TrailerMovies trendTitle={trendTitle}/>}
                <AiOutlineCloseCircle id={trailer ? "Nothing" : "Exit1"} fontSize={55} color="white" cursor={'pointer'} onClick={() => setTrailer(true)}/>
            </div>
        </div>
        </div>
    )
}

export default Trends