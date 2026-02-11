import { useSelector, useDispatch } from "react-redux";
import { closeTrailerModal } from "../utils/moviesSlice";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const TrailerModal = () => {
  const movie = useSelector((store) => store.movies.trailerModal);
  const dispatch = useDispatch();

  if (!movie) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10">
      <div className="relative w-full max-w-5xl aspect-video bg-[#141414] rounded-xl overflow-hidden shadow-2xl">
        
        {/* Close Button */}
        <button 
          className="absolute top-4 right-4 z-110 text-white bg-black/50 hover:bg-white hover:text-black rounded-full p-2 transition-all"
          onClick={() => dispatch(closeTrailerModal())}
        >
          ✕
        </button>

        {/* Reuse your existing components */}
        <VideoTitle title={movie.title} description={movie.overview} isModal={true} />
        <VideoBackground movieID={movie.id} isModal={true} />
        
      </div>
    </div>
  );
};


export default TrailerModal;