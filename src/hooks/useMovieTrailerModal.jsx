import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideoModal } from "../utils/moviesSlice";
import { useEffect } from "react";

/* src/hooks/useMovieTrailerModal.js */
const useMovieTrailerModal = (movieID) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieVideos = async () => {
      if (!movieID) return;
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + movieID + "/videos",
        API_OPTIONS,
      );
      const json = await data.json();
      const filterData = json.results.filter(
        (video) => video.type === "Trailer",
      );
      const trailer = filterData.length ? filterData[0] : json.results[0];

      /* CHANGE: Dispatch to the NEW modal-specific state */
      dispatch(addTrailerVideoModal(trailer));
    };

    getMovieVideos();
  }, [movieID,dispatch]); // Fetch every time a different card is clicked
};

export default useMovieTrailerModal;
