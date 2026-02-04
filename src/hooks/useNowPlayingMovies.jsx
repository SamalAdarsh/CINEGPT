import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = ()=>{

const NowPlayingMovies = useSelector((store)=>store.movies.NowPlayingMovies)

const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS,
    );

    const json = await data.json();

    // console.log(json.results);

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !NowPlayingMovies && getNowPlayingMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

}

export default useNowPlayingMovies;