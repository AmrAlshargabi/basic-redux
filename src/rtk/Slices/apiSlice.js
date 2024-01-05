// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const apiBaseUrl = 'https://fakestoreapi.com/';
// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
    reducerPath: 'ProducteApi',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: apiBaseUrl,
            prepareHeaders: (headers, { getState }) => {
                console.log("========headers", getState().ProducteApi);
                return headers;
            },

        }
    ),
    tagTypes: ['Producte'],
    endpoints: (builder) => ({
        // GET
        getProductes: builder.query({
            query: () => `products/`,
        }),
        // GET
        getProducte: builder.query({
            query: (id) => `products/${id}`,
            providesTags: ['addProducte'],
        }),
        // CREATE
        addProducte: builder.mutation({
            query: (title) => ({
                url: `Producte`,
                method: 'POST',
                body: { title },
                headers: {

                }
            }),
            invalidatesTags: ['Producte'],
        }),
        // PUT update
        updateProducte: builder.mutation({
            query: ({ id, title }) => ({
                url: `Producte/${id}`,
                method: 'PUT',
                body: { title },
            }),
            invalidatesTags: ['Producte'],
        }),
        // DELETE
        deleteProducte: builder.mutation({
            query: (id) => ({
                url: `Producte/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Producte'],
        }),
    }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetProductesQuery, useGetProducteQuery, useAddProducteMutation } = apiSlice
// ============================================================
// # use Mutation in post
// const [createAlbum, { isLoading }] = useCreateAlbumMutation();
// createAlbum(event.target['title'].value);
// # Our data still refers to Caching data, and we don't hit to the backend to invalidate our data.
// tagTypes: ['Producte'],
// providesTags: ['addProducte'],
// invalidatesTags: ['Producte'],


// # Update and Delete
//  the  mutation, you can also handle the updateAlbum and deleteAlbum mutation.
