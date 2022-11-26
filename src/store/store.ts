import {configureStore} from "@reduxjs/toolkit"
import cartReducer from './cartSlice'
export const store = configureStore({
    reducer:{
       cart:cartReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispacth = typeof store.dispatch
export default store