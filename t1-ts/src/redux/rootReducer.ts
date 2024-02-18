import {combineReducers} from "redux";
import {booksReducer} from "./shopSlice";
import shopSlice from './shopSlice'
import bookSlice from './shopSlice'


export const rootReducer = combineReducers({
    booksItems: booksReducer,
    shop: shopSlice,
    booksAPI: bookSlice,
})

export type RootReducer = ReturnType<typeof rootReducer>