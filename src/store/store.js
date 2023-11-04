import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./features/authSlice"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import booksSlice from "./features/booksSlice"
import userSlice from "./features/userSlice"

export const store = configureStore({
   reducer:{
    [booksSlice.reducerPath]:booksSlice.reducer,
    [authSlice.reducerPath]:authSlice.reducer,
    [userSlice.reducerPath]:userSlice.reducer
   },
   middleware:(getDefaultMiddleware)=>
   getDefaultMiddleware()
   .concat(authSlice.middleware)
   .concat(booksSlice.middleware)
   .concat(userSlice.middleware)
})

setupListeners(store.dispatch)