import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/product";

export const ITEMS_ON_PAGE = 3;

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
