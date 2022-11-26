import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItemToCart(state,action){
            const newItem=action.payload;
            state.items.push(newItem)
        },
        removeItemToCart(state,action){
            const id=action.payload;
            state.items=state.items.filter(item=>item.id!==id);       
        }
    }
})

export const cartActions=cartSlice.actions;
export default cartSlice;