import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: 'gpt',
    initialState:{
        showGptsearch: false ,
        gptMovies:null , 
    },
    reducers:{
        toggleGptSearchView : (state)=>{
            state.showGptsearch = !state.showGptsearch;
        },
        addGptMovieResult: (state, action) =>{
            state.gptMovies = action.payload;
        }
    }
});

export const {toggleGptSearchView, addGptMovieResult} = GptSlice.actions;
export default GptSlice.reducer;