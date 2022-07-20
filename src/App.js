import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function showCartHandler() {
    setCartIsShown(!cartIsShown);
  }
  return (
    // Here we need cart-context data access to all the files. So we choose this place
    <CartProvider>
      {cartIsShown && <Cart onClose={showCartHandler} />}
      {/* Since showCartHandler are custom events we start the props with on */}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
