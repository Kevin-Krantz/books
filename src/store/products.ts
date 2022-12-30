import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import { IApiCallBeganPayload } from "./types/IApi";

const slice = createSlice({
  name: "products",
  initialState: { list: [], isLoading: false },
  reducers: {
    requested: (products) => {
      products.isLoading = true;
    },
    failed: (products) => {
      products.isLoading = false;
    },
    loaded: (products, action) => {
      products.list = action.payload;
      products.isLoading = false;
    },
  },
});

const { loaded, requested } = slice.actions;

const url = (id?: any) => (id ? `/foods/${id}` : "/foods");

export const loadProducts = () =>
  apiCallBegan(<IApiCallBeganPayload>{
    url: url(),
    onSuccess: loaded.type,
    onStart: requested.type,
  });

export const getProducts = (state: any) => state.entities.products;

export default slice.reducer;
