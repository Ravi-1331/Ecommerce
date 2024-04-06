import { createSlice } from '@reduxjs/toolkit';

//creation of slice
export const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add:(state, action) => {
            state.push(action.payload);  // jo v input parameter yaha dale hoyenge usko payload dikhata h jaise product.js me "dispatch(add(post))"  post ko dikha rha payload
        },
        remove:(state, action) => {
            return state.filter( (item) => item.id != action.payload);
        },
    }
});  

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;

