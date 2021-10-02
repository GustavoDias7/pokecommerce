import React from "react";
import MainHeader from "../components/MainHeader";
import Catalog from "../components/Catalog";
import Cart from "../components/Cart";
import { GlobalStorage } from "../context/GlobalContenxt";
import Modal from "../components/Modal";

const Home = () => {
  return (
    <GlobalStorage>
      <MainHeader />
      <main>
        <div className="container">
          <Catalog />
          <Cart />
          <Modal />
        </div>
      </main>
    </GlobalStorage>
  );
};

export default Home;
