import { combineReducers } from "@reduxjs/toolkit"
import { balanceReducer } from "./balanceReducer"
import { playlistReducer } from "./playlistReducer"
import { bookApi } from "../services/bookApi"

export const rootReducer = combineReducers({
    userBalance: balanceReducer,
    playlist: playlistReducer,
    [bookApi.reducerPath]: bookApi.reducer
})