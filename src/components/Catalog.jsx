import React from "react";
import Product from "./Product";
import { GlobalContext } from "../context/GlobalContenxt";
import InitialProducts from "./InitialProducts";

const Catalog = () => {
  const { response, searchError } = React.useContext(GlobalContext);

  return (
    <div className="catalog">
      {!searchError && response === null && <InitialProducts />}
      {!searchError && response && <Product infos={response} />}
      {searchError && <p>Pokemon not found.</p>}
    </div>
  );
};

export default Catalog;
