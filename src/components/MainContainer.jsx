import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {

 const movies = useSelector(store => store.movies?.nowPlayingMovies);

if(!movies) return null;

 const mainMovie = movies[5];

//  console.log(mainMovie);

 const {original_title, overview, id} = mainMovie

  return (
    <div className="relative w-screen aspect-video bg-black overflow-hidden">
        <VideoTitle title={original_title} description = {overview} />
        <VideoBackground movieID = {id}/>
    </div>
  )
}

export default MainContainer