import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { env } from "./../../env";

export const bookApi = createApi({
    reducerPath: "books",
    baseQuery: fetchBaseQuery({ baseUrl: env.apiUrl }),
    tagTypes: ["books"],
    endpoints: (build) => ({
        // All books
        getBooks: build.query({
            query: (params) => ({
                url: "books",
                params: params
            }),
            providesTags: ["books"]
        }),
        // Book
        getBook: build.query({
            query: (id) => ({
                url: `books/${id}`
            })
        }),
        createBook: build.mutation({
            query: (data) => ({
                url: "books",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["books"]
        }),
        updateBook: build.mutation({
            query: (data) => ({
                url: "books",
                method: "PUT",
                body: data
            }),
            invalidatesTags: ["books"]
        }),
        deleteBook: build.mutation({
            query: (id) => ({
                url: `books/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["books"]
        })
    })
});

export const { 
    useGetBooksQuery,
    useGetBookQuery,
    useCreateBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation
} = bookApi;