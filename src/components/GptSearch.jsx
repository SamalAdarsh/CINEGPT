import React from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import ShimmerGPT from "./ShimmerGPT";

const GptSearch = () => {

  const showShimmer = useSelector((store) => store.gpt.showShimmer);
  return (
  <>
    <div className="fixed  -z-10 inset-0">
        <img className="h-screen w-screen object-cover"  src={BG_URL} alt="bg-img" />
      </div>

    <div>
      
      <GptSearchBar />
      {showShimmer ? <ShimmerGPT /> : <GptMovieSuggestions />}
    </div>

    </>
  );
};

export default GptSearch;
