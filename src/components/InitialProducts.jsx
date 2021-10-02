import React from "react";
import { GlobalContext } from "../context/GlobalContenxt";
import Product from "./Product";

const InitialProducts = () => {
  const { initial, initialFetch } = React.useContext(GlobalContext);

  React.useEffect(() => {
    initialFetch();
  }, []);
  console.log("initial");

  return (
    <>
      {initial.map((pokemon, index) => {
        return <Product key={index} infos={pokemon} />;
      })}
    </>
  );
};

export default InitialProducts;
