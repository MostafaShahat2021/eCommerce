import { TProduct } from '@customTypes/product';
import { createSlice } from '@reduxjs/toolkit';

interface ICartState {
  items: { [key: number]: number };
  productFullInfo: TProduct[];
}
const initialState: ICartState = {
  items: {},
  productFullInfo: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
  },
});

const getCartTotalQuantity = (state) => {
  const totalQuantity = Object.values(state.cart.items).reduce(
    (prev, crt) => {
      return prev + crt
    },
    0
  );
  return totalQuantity
} 
export  {getCartTotalQuantity};
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
