import React from "react";
import { GlobalContext } from "../context/GlobalContenxt";
import { useNavigate } from "react-router";
import OverlayModal from "./OverlayModal";

const CartProduct = ({ info, onClick }) => {
  const { name, price } = info;

  return (
    <div className="cart-product">
      <div className="content">
        <div className="infos">
          <h3>{name}</h3>
          <p>R$ {price}</p>
        </div>
        <button className="remove" onClick={() => onClick(info)}>
          X
        </button>
      </div>
    </div>
  );
};

const Cart = () => {
  const { cart, total, removeCart, handleBuy, setHasCart, hasCart } =
    React.useContext(GlobalContext);
  const navegate = useNavigate();

  function handleClick() {
    if (handleBuy()) {
      setHasCart(!hasCart);
      navegate("/checkout");
    }
  }

  return (
    <>
      <aside className="cart">
        <header>
          <div className="content">
            <h2>Cart</h2>
          </div>
        </header>

        <section>
          {cart.length === 0 && <p className="empty">Your list is empty.</p>}
          {cart.map((pokemonObj) => {
            return (
              <CartProduct
                key={pokemonObj.name}
                info={pokemonObj}
                onClick={removeCart}
              />
            );
          })}
        </section>

        <footer>
          <div className="content">
            <div className="total">
              <h3>Total</h3>
              <p>R$ {total}</p>
            </div>
            <button
              className="gn-button"
              onClick={handleClick}
              disabled={total <= 0}
            >
              Checkout
            </button>
          </div>
        </footer>
      </aside>
      <OverlayModal />
    </>
  );
};

export default Cart;
