import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

function MealItem(props) {
  const cartCtx = useContext(CartContext);

  // `` is called template literal
  //first $ to print dollar sign and second one is to display formatted price
  const price = `$${props.price.toFixed(2)}`;

  //Here we assign amount:amount because we are passing amount value to HeaderCartButton where calculating total item takes place
  const addToCartHandler = (amount) => {
    // Here item is parameter
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price} </div>
      </div>
      <div>
        {/* We are calling this function just to point out this function to MealItemForm.js */}
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
