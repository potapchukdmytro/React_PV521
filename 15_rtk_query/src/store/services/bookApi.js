import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { env } from "./../../env";

export const bookApi = createApi({
    reducerPath: "books",
    baseQuery: fetchBaseQuery({ baseUrl: env.apiUrl }),
    tagTypes: ["books"],
    endpoints: (build) => ({
        getBooks: build.query({
            query: (params) => ({
                url: "books",
                params: params
            }),
            providesTags: ["books"]
        })
    })
});

export const { useGetBooksQuery } = bookApi;