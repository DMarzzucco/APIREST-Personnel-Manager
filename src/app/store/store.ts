import { configureStore } from "@reduxjs/toolkit";
import {counterSlice, taskSlice} from "../feature"

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        tasks: taskSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch