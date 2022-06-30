import { createReducer } from "@reduxjs/toolkit";

import * as shoppingActions from "../actions/ShoppingActions";

const initialState = {
  shopping: [],
  products: [],
};

const ShoppingReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(shoppingActions.setShopping, (state, { payload }) => ({
      ...state,
      shopping: payload,
    }))
    .addCase(shoppingActions.setProducts, (state, { payload }) => ({
      ...state,
      products: payload,
    }));
});

export default ShoppingReducer;
