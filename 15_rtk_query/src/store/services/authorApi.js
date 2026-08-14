import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { env } from "./../../env";

export const authorApi = createApi({
    reducerPath: "authors",
    baseQuery: fetchBaseQuery({ baseUrl: env.apiUrl }),
    tagTypes: ["authors"],
    endpoints: (build) => ({
        getAuthors: build.query({
            query: () => ({
                url: "authors"
            }),
            providesTags: ["authors"]
        })
    })
});

export const { useGetAuthorsQuery } = authorApi;