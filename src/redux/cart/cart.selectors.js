import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

// const selectUser = (state) => state.user;

// export const selectCartItems = createSelector([selectCart,selectUser], (cart,user));
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    0
  )
);
