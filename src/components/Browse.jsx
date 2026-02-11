import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import ShimmerHome from "./ShimmerHome";
import TrailerModal from "./TrailerModal";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.ShowGptSearch);
   const movies = useSelector((store)=>store.movies)

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  if(!movies?.nowPlayingMovies){

    return <ShimmerHome/>
  }

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      <TrailerModal />
    </div>
  );
};

export default Browse;
