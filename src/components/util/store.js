import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoSlice from "./videoSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer:{
        app: appSlice,
        videos: videoSlice,
        search: searchSlice,
    },
    
})

export default store;