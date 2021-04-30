export const addToCart = (item, quantity = 1) => ({
  type: "ADD_TO_CART",
  item,
  quantity,
});

export const updateQtyInCart = (item, quantity) => ({
  type: "UPDATE_QTY_IN_CART",
  item,
  quantity,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  item,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});
