import { configureStore } from "@reduxjs/toolkit";
import messageReducer from './slice'

export const store = configureStore({
    reducer: {
        user: messageReducer
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>