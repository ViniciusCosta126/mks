import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { IProducts } from "../Types/Product";

interface CartState {
  product: IProducts;
  qtd: number;
}

const initialState: CartState[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartState>) => {
      let index = state.findIndex(
        (e) => e.product.id === action.payload.product.id
      );
      if (index !== -1) {
        state[index].qtd += 1;
      } else {
        state.push(action.payload);
      }
    },
    removeToCart: (state, action: PayloadAction<number>) => {
      return (state = state.filter(
        (item) => item.product.id !== action.payload
      ));
    },
    addQtdItemCart: (state, action: PayloadAction<number>) => {
      let index = state.findIndex((e) => e.product.id === action.payload);
      state[index].qtd += 1;
    },
    removeQtdItemCart: (state, action: PayloadAction<number>) => {
      let index = state.findIndex((e) => e.product.id === action.payload);
        
      
      if (state[index].qtd === 1) {
        return (state = state.filter(
          (item) => item.product.id !== action.payload
        ));
      } else{
        state[index].qtd -= 1;
      }

    },
  },
});

export const { addToCart, removeToCart, addQtdItemCart, removeQtdItemCart } =
  cartSlice.actions;
export const CartItens = (state: RootState) => state.cart;
export default cartSlice.reducer;
