import React from "react";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryConatiner = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">

      <div className="-mt-72 relative z-20 pl-12">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={movies.TopRatedMovies} />
      <MovieList title={"Popular"} movies={movies.PopularMovies} />
      <MovieList title={"Upcomimg"} movies={movies.UpcomingMovies} />
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
    </div>

    </div>
  );
};

export default SecondaryConatiner;
