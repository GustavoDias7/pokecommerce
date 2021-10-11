import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import NotFound from "../pages/NotFound";
import Search from "../pages/Search";
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
          <Route path="search/:id" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
};

export default MainRoutes;
