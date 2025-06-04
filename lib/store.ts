import { configureStore } from "@reduxjs/toolkit";
import aboutSliceReducer from '../lib/Redux/AboutUsSlice'

export const store = configureStore({
    reducer: {
        aboutUs: aboutSliceReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type ApiDispatch = typeof store.dispatch