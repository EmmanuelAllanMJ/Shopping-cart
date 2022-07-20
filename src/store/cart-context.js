import React from "react";

//Here we are giving default data which we will not be using but is useful for better autocompletion
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
