import { createSlice } from "@reduxjs/toolkit";
import { ICart } from "./types/ICart";

const slice = createSlice({
  name: "cart",
  initialState: [] as ICart[],
  reducers: {
    addCartItem: (cart: ICart[], { payload: product }) => {
      const cartItem = cart.find((cartItem) => cartItem._id === product._id);

      if (cartItem) {
        cartItem.quantity++;
      } else {
        const newCartItem = { ...product, quantity: 1 };
        cart.push(newCartItem);
      }
    },
    removeCartItem: (cart: ICart[], { payload: product }) => {
      const cartItem = cart.find((cartItem) => cartItem._id === product._id);

      if (cartItem) cartItem.quantity--;
    },
    cartNumberInput: (cart: ICart[], { productId, payload }: any) => {
      const cartItem = cart.find((cartItem) => cartItem._id === productId);

      if (cartItem) {
        cartItem.quantity = payload;

        cartItem.quantity = payload;
      }
    },
  },
});

export const getCart = (state: { entities: { cart: ICart[] } }) =>
  state.entities.cart;

export const getProductQuantity =
  (productId: string) => (state: { entities: { cart: ICart[] } }) => {
    const cartItem = state.entities.cart.find(
      (cartItem) => cartItem._id === productId
    );
    return cartItem ? cartItem.quantity : 0;
  };

export const getCartQuantity = (state: { entities: { cart: ICart[] } }) =>
  state.entities.cart.reduce(
    (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
    0
  );

export const { addCartItem, removeCartItem, cartNumberInput } = slice.actions;
export default slice.reducer;
