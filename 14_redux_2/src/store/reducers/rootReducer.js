import { combineReducers } from "@reduxjs/toolkit"
import { balanceReducer } from "./balanceReducer"
import { playlistReducer } from "./playlistReducer"

export const rootReducer = combineReducers({
    userBalance: balanceReducer,
    playlist: playlistReducer
})