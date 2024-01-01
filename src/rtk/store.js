import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/counterSlice'
import ProducteSlice from './Slices/ProducteSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        productes: ProducteSlice,
    },
})