import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum PAGES {
  CATALOG = "CATALOG",
  PRODUCTS_LIST = "PRODUCTS_LIST",
}

export interface ShopState {
  page: PAGES;
  products: IProduct[];
  categories: string[];
}

interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ProductCategories {
  id: number;
  categories: [];
}

const initialState: ShopState = {
  page: PAGES.CATALOG,
  products: [],
  categories: [],
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    changePage: (state, action: PayloadAction<PAGES>) => {
      state.page = action.payload;
    },
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { changePage, setProducts, setCategories } = shopSlice.actions;
export default shopSlice.reducer;
