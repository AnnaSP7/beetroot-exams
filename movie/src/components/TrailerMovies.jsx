import React, { useEffect } from 'react'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import movieTrailer from 'movie-trailer'
import './TrailerMovies.css';

function TrailerMovie({moviesTitle}) {
    const [video, setVideo] = useState("")
    const [videoURL, setVideoURL] = useState("https://youtu.be/sa9l-dTv9Gk")

    function handleSearch() {
        movieTrailer(video).then((res) => {
            setVideoURL(res);
        });
    }

    // useEffect(() => {
    //     handleSearch()
    // }, [videoURL])

    return(
        <div>
            <div className='Container'>

            </div>

            <div className='player'>
                {videoURL &&<ReactPlayer url={videoURL} controls={true}/>}
            </div>
        </div>
    )
}

export default TrailerMovie