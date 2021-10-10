import React from "react";
import { GlobalContext } from "../context/GlobalContenxt";

const OverlayModal = () => {
  const { hasCart, setHasCart } = React.useContext(GlobalContext);

  function handleClick() {
    setHasCart(!hasCart);
  }

  if (!hasCart) return null;
  return <div className="overlay-modal" onClick={handleClick} />;
};

export default OverlayModal;
