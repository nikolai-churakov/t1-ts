import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export enum PAGES {
  CATALOG = 'CATALOG',
  PRODUCTS_LIST = 'PRODUCTS_LIST',
}

export interface ShopState {
  page: PAGES;
}

const initialState: ShopState = {
  page: PAGES.CATALOG,
}

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    changePage: (state, action: PayloadAction<PAGES>) => {
      state.page = action.payload;
  },
  },
})

// Action creators are generated for each case reducer function
export const { changePage } = shopSlice.actions

export default shopSlice.reducer