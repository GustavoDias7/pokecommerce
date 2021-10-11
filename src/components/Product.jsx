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
          <Link to={"search/" + name}>
            <img src={photo} alt={name} />
          </Link>
        </div>
        <h2>
          <Link to={"search/" + name}>{name}</Link>
        </h2>
        <p>R$ {price}</p>
        <button className="gn-button" onClick={() => addCart({ name, price })}>
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default Product;
