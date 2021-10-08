import React from "react";
import Cart from "../components/Cart";
import Details from "../components/Details";

const PokemonDetails = () => {
  return (
    <main>
      <div className="container">
        <Details />
        <Cart />
      </div>
    </main>
  );
};

export default PokemonDetails;
