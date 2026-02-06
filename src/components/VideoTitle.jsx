import React from 'react'

const VideoTitle = ({title,description}) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-linear-to-b from-black/50 to-transparent w-screen aspect-video z-20 ">
     <h1 className="text-2xl md:text-6xl font-bold ">{title}</h1>
     <p className="hidden md:inline-block py-6 w-1/4">{description}</p>
     <div className="m-2 md:m-0">
        <button className="bg-white hover:bg-white/80 text-black p-1.5 md:p-4 px-6 md:px-12 text-xl rounded-lg"> ▶︎ Play</button>
        <button className=" hidden md:inline-block mx-2 bg-gray-500 hover:bg-gray-500/80 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">ⓘ More info</button>
     </div>

    </div>
  )
}

export default VideoTitle