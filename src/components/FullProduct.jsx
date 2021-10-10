import React from "react";

const FullProduct = ({ info }) => {
  const { name, photo, price, abilities, height, description } = info;

  return (
    <article className="full-product">
      <div className="left">
        <img src={photo} alt={name} />
      </div>
      <div className="right">
        <header>
          <h2>{name}</h2>
          <p className="price">
            <strong>R$ {price}</strong>
          </p>
        </header>
        <div className="stars">
          <span className="fa fa-star" />
          <span className="fa fa-star" />
          <span className="fa fa-star" />
          <span className="fa fa-star" />
          <span className="fa fa-star" />
        </div>
        <p className="description">{description}</p>
        <div className="abilities">
          <ul>
            {abilities.map(({ ability: { name } }) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
        <p className="height">Height: {height}</p>
      </div>
    </article>
  );
};

export default FullProduct;
