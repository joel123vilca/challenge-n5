import { createSelector } from "@reduxjs/toolkit";

export const shoppingStateSelector = createSelector(
  (state) => state.shopping,
  (shopping) => shopping
);

export const productsSelector = createSelector(
  shoppingStateSelector,
  (state) => state.products
);

export const shoppingSelector = createSelector(
  shoppingStateSelector,
  (state) => state.shopping
);
