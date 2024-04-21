import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";

const actGetProductsByItems = createAsyncThunk("cart/actGetProductsByItems", async (_, thunkAPI) => {
  const {reJectedWithValue, getState} = thunkAPI
  const {cart} = getState() as RootState
console.log(cart.items);
})

export default actGetProductsByItems