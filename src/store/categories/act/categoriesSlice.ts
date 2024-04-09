import { createSlice } from "@reduxjs/toolkit";

interface ICategoriesSlice {
  records: {id: number; title: string; prefix:string; img:string;}[]
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null
}

const initialState: ICategoriesSlice = {
  records: [],
  loading: 'idle',
  error: null
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {}
})

export default categoriesSlice.reducer