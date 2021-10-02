import React from "react";
import { GlobalContext } from "../context/GlobalContenxt";

const Modal = () => {
  const { buy, setBuy, total } = React.useContext(GlobalContext);

  function handleClick(e) {
    if (e.target === e.currentTarget) {
      setBuy(false);
    }
  }

  if (!buy) return null;
  return (
    <div className="modal" onClick={handleClick}>
      <div className="content">
        <div>
          <button className="close-modal" onClick={() => setBuy(false)}>
            X
          </button>
          <h2>Obrigado!</h2>
          <p>
            Você ganhou R$ {(total * 0.05).toFixed(2).replace(".", ",")} de
            cashback
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
