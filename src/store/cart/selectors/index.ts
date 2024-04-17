import { RootState } from "@store/index";
import { createSelector } from "@reduxjs/toolkit";

const getCartTotalQuantitySelectore = createSelector(
  (state:RootState) => state.cart.items,
  (items) => {
    // console.log('run')
    const totalQuantity = Object.values(items).reduce(
      (prev, crt) => {
        return prev + crt;
      },
      0
    );
    return totalQuantity;
  }
);

export {getCartTotalQuantitySelectore}