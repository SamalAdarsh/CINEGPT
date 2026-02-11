import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    PopularMovies: null,
    TopRatedMovies: null,
    UpcomingMovies: null,
    trailerVideo: null,
    trailerModal: null,
    trailerVideoModal: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.TopRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.UpcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addTrailerVideoModal: (state, action) => {
      state.trailerVideoModal = action.payload;
    },
    openTrailerModal: (state, action) => {
      state.trailerModal = action.payload;
    },
    closeTrailerModal: (state) => {
      state.trailerModal = null;
      state.trailerVideoModal = null;
    }
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addTrailerVideoModal,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  openTrailerModal,
  closeTrailerModal
} = moviesSlice.actions;

export default moviesSlice.reducer;
