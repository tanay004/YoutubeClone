import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState:{
        cacheFiles:{},
    },
    reducers:{
        addToCache: (state, action)=>{
            state.cacheFiles = {...state.cacheFiles, ...action.payload};
        }        
    }
})

export const {addToCache} = searchSlice.actions;
export default searchSlice.reducer;