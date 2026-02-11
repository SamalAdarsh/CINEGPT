import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import useMovieTrailerModal from "../hooks/useMovieTrailerModal";

// const VideoBackground = ({ movieID }) => {
//   //   const [trailerId, setTrailerId] = useState(null);
//   const trailerV = useSelector((store) => store.movies?.trailerVideo);

//   useMovieTrailer(movieID);

//   return (
//     <div>
//       <iframe
//       className="w-full aspect-video scale-150"
//       src={
//           "https://www.youtube.com/embed/" +
//           trailerV?.key +
//           "?&autoplay=1&mute=1&loop=1" 
//         }
//         title="YouTube video player"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         referrerPolicy="strict-origin-when-cross-origin"
//       ></iframe>
//     </div>
//   );
// };

const VideoBackground = ({ movieID, isModal = false }) => {
  
  /* 2. Determine which hook to call based on where this component is used */
useMovieTrailer(!isModal ? movieID : null);
  useMovieTrailerModal(isModal ? movieID : null);
  /* 3. Subscribe to the correct piece of state in the store */
  const trailerVideo = useSelector((store) => 
    isModal ? store.movies?.trailerVideoModal : store.movies?.trailerVideo
  );

  /* 4. Safety: If the trailer key isn't loaded yet, return a black placeholder */
  if (!trailerVideo?.key) return <div className="w-full aspect-video bg-black"></div>;

  return (
    <div className={isModal ? "w-full" : "w-screen overflow-hidden"}>
      <iframe
        /* Keep your existing styling like scale-150 for the Hero */
        className={"w-full aspect-video " + (!isModal ? "scale-150" : "object-cover")}
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo.key +
          "?&autoplay=1&mute=1&loop=1&playlist=" + trailerVideo.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
