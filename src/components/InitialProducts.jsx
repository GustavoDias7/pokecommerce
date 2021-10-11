import React from "react";
import { GlobalContext } from "../context/GlobalContenxt";
import Product from "./Product";

const InitialProducts = () => {
  const { initial, initialFetch } = React.useContext(GlobalContext);

  React.useEffect(() => {
    initialFetch();
  }, []);

  return (
    <section className="initial-products">
      <div className="container">
        {initial.map((pokemon, index) => {
          return <Product key={index} infos={pokemon} />;
        })}
      </div>
    </section>
  );
};

export default InitialProducts;
