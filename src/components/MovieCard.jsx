import React from 'react'
import { POSTER_CDN_URL } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { openTrailerModal } from '../utils/moviesSlice';

// const MovieCard = ({posterPath}) => {
//   if(!posterPath) return null;
//   return (
//     <div className="w-36 md:w-48 pr-4">

//       <img  alt="Movie Card" src={POSTER_CDN_URL + posterPath }/>

//     </div>
//   )
// }


const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  // Safety check: if movie data is missing, don't render
  if (!movie?.poster_path) return null;

  /* CHANGE 2: Create a handler to open the modal with the selected movie */
  const handleCardClick = () => {
    dispatch(openTrailerModal(movie));
  };

  return (
    <div 
      /* CHANGE 3: Add 'cursor-pointer' and 'onClick' to trigger the modal */
      className="w-36 md:w-48 pr-4 cursor-pointer hover:scale-110 transition-transform duration-300"
      onClick={handleCardClick}
    >
      <img 
        alt="Movie Card" 
        src={POSTER_CDN_URL + movie.poster_path} 
        className="rounded-lg"
      />
    </div>
  );
};

export default MovieCard