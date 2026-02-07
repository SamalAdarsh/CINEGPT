import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieID }) => {
  //   const [trailerId, setTrailerId] = useState(null);
  const trailerV = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer({ movieID });

  return (
    <div>
      <iframe
      className="w-full aspect-video scale-150"
      src={
          "https://www.youtube.com/embed/" +
          trailerV?.key +
          "?&autoplay=1&mute=1&loop=1" 
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
