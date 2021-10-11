import React from "react";
import SearchProduct from "./SearchProduct";
import Cart from "../components/Cart";
import { GlobalContext } from "../context/GlobalContenxt";

const MainHeader = () => {
  const { hasCart, setHasCart, cart } = React.useContext(GlobalContext);

  function handleClick() {
    setHasCart(!hasCart);
  }

  return (
    <header id="main-header">
      <div className="container">
        <a href="/" className="logo">
          <h1>PokeCommerce</h1>
        </a>
        <div className="right">
          <SearchProduct />
          <div className="cart-container">
            <i className="fas fa-shopping-cart" onClick={handleClick}>
              <span>{cart.length}</span>
            </i>
            {hasCart && <Cart />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
