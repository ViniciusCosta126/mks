import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { IProducts } from "../Types/Product";

interface CartState {
  product: IProducts;
  qtd: number;
}

const initialState: CartState[] = [
];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartState>) => {
      let index = state.findIndex(
        (e) => e.product.id === action.payload.product.id
      );
      if (index !== -1) {
        state[index].qtd = state[index].qtd + 1;
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const CartItens = (state: RootState) => state.cart;
export default cartSlice.reducer;
