import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = ({ movieID }) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    // console.log("1. Hook received ID:", movieID);
    if (!movieID) return;

    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieID + "/videos?",
      API_OPTIONS,
    );
    const json = await data.json();

    // console.log("2. API Results:", json.results);

    // console.log(json);

    const filterData = json.results.filter((video) => video.type == "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];

    // console.log("3. Final Trailer Object:", trailer);
    // console.log(trailer);

    dispatch(addTrailerVideo(trailer));
    // setTrailerId(trailer.key);
  };

  useEffect(() => {
    getMovieVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieID]);
};

export default useMovieTrailer;
