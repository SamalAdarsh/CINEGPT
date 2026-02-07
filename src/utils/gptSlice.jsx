import { createSlice } from "@reduxjs/toolkit";



const gptSlice = createSlice({

    name: "gpt",
    initialState: {

        ShowGptSearch : false,
        ShowMovieResult : null,
        movieNames: null,
        movieResults: null,
        showShimmer: false
    },
    reducers:{

        toggleGptSearchView :(state) =>{

            state.ShowGptSearch = !state.ShowGptSearch;
        },

        addGptMovieResult : (state,action) =>{

            const {movieNames,movieResults} = action.payload;

            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },

        setShimmer: (state, action) => {
  state.showShimmer = action.payload;
}

    
    }
})


export const {toggleGptSearchView, addGptMovieResult, setShimmer} = gptSlice.actions;

export default gptSlice.reducer;