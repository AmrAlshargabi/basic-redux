import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductes = createAsyncThunk(
    "ProducteSlice/fetchProductes",
    async () => {
        const res = await fetch(`https://fakestoreapi.com/products/`);
        const data = await res.json();
        return data;
    });
// const initialState = {
//     data: [],
//     isLoading: false,
//     error: null,
// }
const ProducteSlice = createSlice({
    name: 'ProducteSlice',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProductes.fulfilled, (state, action) => {
            return action.payload;
        });
    }

});
// export const { } = ProducteSlice.actions;
export default ProducteSlice.reducer;