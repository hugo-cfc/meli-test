/* eslint-disable @typescript-eslint/default-param-last */
"use client";

import { combineReducers, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import Filter from "../../../@types/Filter";
import Product from "../../../@types/Product";
import Sort from "../../../@types/Sort";

export interface ProductState {
  totalResults: number;
  products: Product[];
  isSorterDropdownOpen: boolean;
  search: string;
  availableSorts: Sort[];
  sort: Sort | null;
  availableFilters: Filter | null;
  filters: Filter[] | null;
}

const initialState: ProductState = {
  totalResults: 0,
  products: [],
  isSorterDropdownOpen: false,
  search: "",
  availableSorts: [],
  sort: null,
  availableFilters: null,
  filters: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setTotalResults(state, action: PayloadAction<number>) {
      state.totalResults = action.payload;
    },
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    setIsSorterDropdownOpen(state, action: PayloadAction<boolean>) {
      state.isSorterDropdownOpen = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setAvailableSorts(state, action: PayloadAction<Sort[]>) {
      state.availableSorts = action.payload;
    },
    setSort(state, action: PayloadAction<Sort | null>) {
      state.sort = action.payload;
    },
    setAvailableFilters(state, action: PayloadAction<Filter | null>) {
      state.availableFilters = action.payload;
    },
    setFilters(state, action: PayloadAction<Filter[] | null>) {
      state.filters = action.payload;
    },
  },
});

const rootReducer = combineReducers({
  products: productSlice.reducer,
});

export const {
  setTotalResults,
  setProducts,
  setIsSorterDropdownOpen,
  setSearch,
  setAvailableSorts,
  setSort,
  setAvailableFilters,
  setFilters,
} = productSlice.actions;
export default rootReducer;
