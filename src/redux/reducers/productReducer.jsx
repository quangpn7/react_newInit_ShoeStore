//rxslice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrProduct: [
    {
      id: 1,
      name: "nike 1",
      price: 1000,
      image: "https://picsum.photos/id/1/200/200",
    },
  ],
  productDetail: {
    id: 1,
    name: "nike 1",
    image: "https://picsum.photos/200/200",
  },
};

const productReducer = createSlice({
  name: "productReducer", //Name of reducer
  initialState, // init value (string, num,...)
  reducers: {
    getProductAction: (state, action) => {
      state.arrProduct = action.payload;
    },
    getProductDetail: (state, action) => {
      state.productDetail = action.payload;
    },
  },
});

export const { getProductAction, getProductDetail } = productReducer.actions;

export default productReducer.reducer;
