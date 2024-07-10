import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import taskSlice from "../features/tasks/tasksSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        tasks: taskSlice,
    }
})

// importar tipos
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch