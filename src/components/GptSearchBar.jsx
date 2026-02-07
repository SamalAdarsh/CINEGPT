import React, { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult, setShimmer } from "../utils/gptSlice";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  const movieNames = useSelector((store) => store.gpt.movieNames);

  const searchText = useRef(null);

  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );

    const json = await data.json();

    return json.results;
  };

  const handleGPTSearchClick = async () => {
    console.log(searchText.current.value);

    dispatch(setShimmer(true));

    const gptQuery =
      " Act as a movie recommendation system & suggest some movies for the query" +
      searchText.current.value +
      "Only gives names of 5 movies, comma seperated like the example given ahead. Example Result: Dhurandhar, Dangal, Bajarangi Bhaijaan, 3 Idiots, Ae dil hai Mushkil";

    const gptResults = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptQuery }],
    });

    console.log(gptResults.choices?.[0]?.message?.content);

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    console.log(gptMovies);

    const promiseArrays = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArrays);

    console.log(tmdbResults);

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));

    dispatch(setShimmer(false));
    
  };

  return (
    
    <div className={"flex justify-center transition-all duration-500 " + 
    (movieNames ? "pt-[55%] md:pt-[8%]" : "pt-[75%] md:pt-[20%]")}>
    
    <form
      /* Removed all 'mt' or 'my' classes from here so they don't fight the parent. */
      className="w-11/12 md:w-1/2 bg-black flex flex-col items-center md:grid md:grid-cols-12 rounded-lg"
      onSubmit={(e) => e.preventDefault()}
    >

        <input
          ref={searchText}
          type="text"
          // className="p-4 m-4 md:col-span-9 col-span-12 bg-white"
          className="p-4 m-4 w-[90%]  md:col-span-9 bg-white text-black rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          // className="col-span-6 md:col-span-3  m-4 py-2 px-4 bg-red-600 text-white rounded-lg"
          className="py-4 md:py-3 px-8 md:px-8 m-4 md:m-6 w-fit md:w-auto  md:col-span-3 bg-red-600 hover:bg-red-700 text-white rounded-lg cursor-pointer"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
