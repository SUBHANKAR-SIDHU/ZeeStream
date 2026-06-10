import { configureStore } from '@reduxjs/toolkit'
import  movieSlice  from "./reducer/movieSlicer";
import  peopleSlice  from "./reducer/peopleSlicer";
import  tvSlice  from "./reducer/tvSlicer";

export const store = configureStore({
    reducer: {
        movie: movieSlice,
        tv: tvSlice,
        people: peopleSlice,
    },
})