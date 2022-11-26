import { createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice({
    name:'product',
    initialState:{productIsVisible:false, selectedProductData:{}},
    reducers:{
        toggle(state){
            state.productIsVisible=!state.productIsVisible;
        },
        selectedProduct(state,action){
            state.selectedProductData=action.payload
        }
    }
})

export const productActions=productSlice.actions;
export default productSlice;