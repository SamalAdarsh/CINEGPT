import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({

    name: "gpt",
    initialState: {

        ShowGptSearch : false,
    },
    reducers:{

        toggleGptSearchView :(state) =>{

            state.ShowGptSearch = !state.ShowGptSearch;
        },
    }
})


export const {toggleGptSearchView} = gptSlice.actions;

export default gptSlice.reducer;