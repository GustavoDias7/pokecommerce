import React from "react";
import Catalog from "../components/Catalog";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <main>
      <div className="container">
        <Catalog />
        <Cart />
      </div>
    </main>
  );
};

export default Home;
