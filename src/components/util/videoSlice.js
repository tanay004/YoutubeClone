import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "videos",
    initialState: {
        vids1:[],
        vids2:[],
    },
    reducers: {
        setAllVideos: (state, action)=>{    
            state.vids1 = action.payload.slice(); 
        },
        setAllVideos2: (state, action)=>{    
            state.vids2 = action.payload.slice(); 
        }
    }
})

export const {setAllVideos, setAllVideos2} = videoSlice.actions;
export default videoSlice.reducer;