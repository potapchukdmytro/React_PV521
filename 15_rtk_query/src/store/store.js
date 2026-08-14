import { rootReducer } from "./reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { bookApi } from "./services/bookApi";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(
            bookApi.middleware
        )
});