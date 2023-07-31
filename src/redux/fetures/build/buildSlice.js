import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const buildSlice = createSlice({
  name: "pcbuild",
  initialState,
  reducers: {
    addToBuild: (state, action) => {
      state.products.push(action.payload);
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    removeProduct: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter(
        (product) => product._id !== productId
      );
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    loadProductsFromLocalStorage: (state) => {
      const savedProducts = JSON.parse(localStorage.getItem("products"));
      if (savedProducts) {
        state.products = savedProducts;
      }
    },
  },
});

export const { addToBuild, removeProduct } = buildSlice.actions;
export default buildSlice.reducer;
