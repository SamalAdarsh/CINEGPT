import React from 'react'

const VideoTitle = ({title,description,isModal=false}) => {
  return (
    <div className={"px-14 md:px-24 flex flex-col absolute text-white bg-linear-to-b from-black/80 to-transparent  z-20  justify-end" + (isModal ? "bottom-0 left-0 w-full   h-auto pt-[15%] md:pt-[15%] " : "inset-0 pt-[20%] md:pt-[15%] w-full h-full ")}>
     <h1 className="text-2xl md:text-6xl font-bold ">{title}</h1>
     <p className={"hidden md:inline-block py-6 line-clamp-2 md:line-clamp-3 " + (isModal ? "md:w-2/4" : "md:w-1/4")}>{description}</p>
     <div className="m-2 md:m-0 flex items-center gap-2">
        <button className="bg-white hover:bg-white/80 text-black p-1.5 md:p-4 px-6 md:px-12 text-xl rounded-lg "> ▶︎ Play</button>
        <button className=" hidden md:inline-block mx-2 bg-gray-500 hover:bg-gray-500/80 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">ⓘ More info</button>
     </div>

    </div>
  )
}

export default VideoTitle