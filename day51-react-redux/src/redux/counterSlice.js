import { createSlice } from "@reduxjs/toolkit";

// Global State
const initialState = {
    value: 0
};

const counterSlice = createSlice({
    // 3 - parameters(name, global data, reducers)
    name: "counter",
    initialState,
    reducers: {
        // functions to update the global data
        increment: (state) => {
            state.value += 1;
        },

        decrement: (state) => {
            state.value -= 1;
        },

        reset: (state) => {
            state.value = 0;
        }
    }
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;