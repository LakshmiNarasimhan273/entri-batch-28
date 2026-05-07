import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notesSlice"

const store = configureStore({
    reducer: {
        notesdata: notesReducer
    }
});

export default store;