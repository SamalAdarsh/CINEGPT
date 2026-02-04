import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {  addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = ()=>{

  const UpcomingMovies  = useSelector((store)=> store.movies.UpcomingMovies)

const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS,
    );

    const json = await data.json();

    // console.log(json.results);

    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
   !UpcomingMovies && getUpcomingMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

}

export default useUpcomingMovies;