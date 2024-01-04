import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductes = createAsyncThunk(
    "ProducteSlice/fetchProductes",
    async () => {
        const res = await fetch(`https://fakestoreapi.com/products/`);
        const data = await res.json();
        return data;
    });

const initialState = {
    data: [],
    isLoading: false,
    error: null,
}
const ProducteSlice = createSlice({
    name: 'ProducteSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProductes.pending, (state, action) => {
            state.isLoading = true;
            state.data = action.payload;
        }).addCase(fetchProductes.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        }).addCase(fetchProductes.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }

});
// export const { } = ProducteSlice.actions;
export default ProducteSlice.reducer;