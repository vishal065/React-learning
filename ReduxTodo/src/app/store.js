// step 1
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"; //yeh thoda km samaj aya

export const store = configureStore({
  reducer: todoReducer,
});
