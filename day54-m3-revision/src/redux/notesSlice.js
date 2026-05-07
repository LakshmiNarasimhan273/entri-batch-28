import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: []
};

const notesSlice = createSlice({
    name: "notesdata",
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.notes.push(action.payload);
        }
    }
});

export const {addNote} = notesSlice.actions;
export default notesSlice.reducer;