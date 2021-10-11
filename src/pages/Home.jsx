import React from "react";
import Banners from "../components/Banner";
import Catalog from "../components/Catalog";

const Home = () => {
  return (
    <>
      <Banners />
      <main>
        <div className="container">
          <Catalog />
        </div>
      </main>
    </>
  );
};

export default Home;
