import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";

const store=configureStore({reducer:{product:productSlice.reducer,cart:cartSlice.reducer}})

export default store;