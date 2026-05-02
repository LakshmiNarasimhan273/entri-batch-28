import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notesSlice";

const store = configureStore({
    reducer: {
        notes: notesReducer
    }
});

export default store;