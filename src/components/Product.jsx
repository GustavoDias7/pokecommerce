import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContenxt";

const Product = ({ infos }) => {
  const { addCart } = React.useContext(GlobalContext);
  const { name, price, photo } = infos;

  return (
    <article className="product">
      <div className="content">
        <div className="img-container">
          <Link to={"pokemon/" + name}>
            <img src={photo} alt={name} />
          </Link>
        </div>
        <h2>
          <Link to={"pokemon/" + name}>{name}</Link>
        </h2>
        <p>R$ {price}</p>
        <button className="gn-button" onClick={() => addCart(infos)}>
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default Product;
