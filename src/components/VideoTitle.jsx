import React from 'react'

const VideoTitle = ({title,description}) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-linear-to-b from-black w-screen aspect-video ">
     <h1 className="text-6xl font-bold ">{title}</h1>
     <p className=" py-6 w-1/4">{description}</p>
     <div>
        <button className="bg-white hover:bg-white/80 text-black p-4 px-12 text-xl rounded-lg"> ▶︎ Play</button>
        <button className=" mx-2 bg-gray-500 hover:bg-gray-500/80 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">ⓘ More info</button>
     </div>

    </div>
  )
}

export default VideoTitle