import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/counterSlice'
import ProducteSlice from './Slices/ProducteSlice'
import { apiSlice } from './Slices/apiSlice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        productes: ProducteSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})