import React, { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

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
  };

  return (
    <div className=" pt-[50%] md:pt-[1%] flex justify-center">
      <form
        // className="w-11/12 my-[20%]  md:w-1/2 bg-black grid grid-cols-12"
        className="w-11/12 md:w-1/2 my-[20%] bg-black flex flex-col items-center md:grid md:grid-cols-12 rounded-lg" 

        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          // className="p-4 m-4 md:col-span-9 col-span-12 bg-white"
          className="p-4 m-4 w-[90%]  md:col-span-9 bg-white text-black"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          // className="col-span-6 md:col-span-3  m-4 py-2 px-4 bg-red-600 text-white rounded-lg"
          className="py-4 md:py-3 px-8 md:px-8 m-4 md:m-6 w-fit md:w-auto  md:col-span-3 bg-red-600 text-white rounded-lg"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
