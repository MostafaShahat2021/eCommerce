import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import categories from './categories/categoriesSlice';
import products from './products/productsSlice';
import cart from './cart/cartSlice';

const cartPresistConfig = {
  key: 'cart',
  storage,
  whiteList: ['items'],
};
const rootReducer = combineReducers({
  categories,
  products,
  cart: persistReducer(cartPresistConfig, cart),
});

const store = configureStore({
  reducer: rootReducer,
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);
export { store, persistor };
