import { createSlice } from "@reduxjs/toolkit";

// Slice = Global Data + Reducers Function

// Global State
const initialState = {
    usernotes: []
};

const notesSlice = createSlice({
    // 3 parameter rule for redux
    name: "notes",
    initialState,
    reducers: {
        // C R U D
        // addNote, useSelector, updateNote, DeleteNote
        addNote: (state, action) => {
            state.usernotes.push(action.payload);
        },

        // TASK: Develop the Update Functionality

        deleteNote: (state, action) => {
            state.usernotes = state.usernotes.filter(
                data => data.id !== action.payload);
        }
    }
});

export const { addNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;