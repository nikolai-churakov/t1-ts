import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum PAGES {
  CATALOG = "CATALOG",
  PRODUCTS_LIST = "PRODUCTS_LIST",
}

export interface ShopState {
  page: PAGES;
}

/////////
/////////
// export interface BookList {
//   books: [];
//   totalBooks: number;
// }

// export interface Book {
//   volumeInfo: VolumeInfo;
// }

// export interface VolumeInfo {
//   title: string;
//   authors: string[];
//   categories: string[];
//   imageLinks: any;
// }

/////////
/////////

const initialState: ShopState = {
    page: PAGES.CATALOG,
  // },
  // BookList = {
  //   books: [],
  //   totalBooks: 0,
  };

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    changePage: (state, action: PayloadAction<PAGES>) => {
      state.page = action.payload;
    },
  },
});

// export const bookSlice = createSlice({
//   name: "booksAPI",
//   initialState,
//   reducers: {
//     addBooksToState: (state, action: PayloadAction<BookList>) => {
//       state.page = [...action.payload.books];
//       state.totalBooks = action.payload.totalBooks;
//     },
//   },
// });

// Action creators are generated for each case reducer function
export const { changePage } = shopSlice.actions;
export default shopSlice.reducer;

// Приехало из книжного магазина
// export const { addBooksToState } = bookSlice.actions;
// export const booksReducer = bookSlice.reducer;