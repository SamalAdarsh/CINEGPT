import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieID }) => {
  //   const [trailerId, setTrailerId] = useState(null);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer({ movieID });
  
  return (
    <div>
      <iframe
        src={
          "https://www.youtube.com/embed/yeR5bcbRPak?si=SQJTxZmiRvgmJpbo" +
          trailerVideo?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
