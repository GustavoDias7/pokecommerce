import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import NotFound from "../pages/NotFound";
import PokemonDetails from "../pages/PokemonDetails";
import { GlobalStorage } from "../context/GlobalContenxt";
import MainHeader from "../components/MainHeader";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <MainHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="pokemon/:id" element={<PokemonDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
};

export default MainRoutes;
