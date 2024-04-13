import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByCategoryPrefix from "./act/actGetProductsBycategoryPrefix";
import { TLoading } from "@customTypes/shared";
import { TProduct } from "@customTypes/product";

interface ICategoriesSlice {
  records: TProduct[]
  loading: TLoading
  error: string | null
}

const initialState: ICategoriesSlice = {
  records: [],
  loading: 'idle',
  error: null
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetProductsByCategoryPrefix.pending, (state) => {
      state.loading = "pending";
      state.error = null
    });
    builder.addCase(actGetProductsByCategoryPrefix.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload
    });
    builder.addCase(actGetProductsByCategoryPrefix.rejected, (state, action) => {
      state.loading = 'failed';
      //type casting
      // state.error = action.payload as string
      if(action.payload && typeof action.payload === "string"){
        state.error = action.payload
      }
    })
  }
})

export {actGetProductsByCategoryPrefix}
export default productsSlice.reducer