import { configureStore } from "@reduxjs/toolkit";
import darkmodeReducer from "./them/darkmodSlice";
const store = configureStore({
  reducer: darkmodeReducer,
});

export default store;
