import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import { TProduct } from "@customTypes/product";

type TResponse = TProduct[]

const actGetProductsByItems = createAsyncThunk("cart/actGetProductsByItems", async (_, thunkAPI) => {
  const {rejectWithValue, fulfillWithValue, getState} = thunkAPI
  const {cart} = getState() as RootState
// console.log(cart.items);
const itemsId = Object.keys(cart.items)
const concatenatedItemsId = itemsId.map((el) => `id=${el}`).join("&")
// console.log(concatenatedItemsId);

if(!itemsId.length){
  return fulfillWithValue([])
}
try {
  const response = await axios.get<TResponse>(`/products?${concatenatedItemsId}`)
  return response.data
} catch (error) {
  if(axios.isAxiosError(error)){
    return rejectWithValue(error.response?.data.message || error.message)
  } else {
    return rejectWithValue("unexpected error")
  }
}
})

export default actGetProductsByItems