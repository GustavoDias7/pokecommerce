import React from "react";
import Banners from "../components/Banner";
import DailyDiscount from "../components/DailyDiscount";
import InitialProducts from "../components/InitialProducts";

const Home = () => {
  return (
    <>
      <Banners />
      <InitialProducts />
      <DailyDiscount />
    </>
  );
};

export default Home;
