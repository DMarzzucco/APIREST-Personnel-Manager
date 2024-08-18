import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialCounter } from "../../../components";

export const counterSlice = createSlice({
    name: "counter",
    initialState:initialCounter,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        reset: (state) => {
            state.value = 0
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },

})
export const { increment, reset, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
