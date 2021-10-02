import React from "react";
import { useLocation } from "react-router";
import SearchProduct from "./SearchProduct";

const MainHeader = () => {
  const location = useLocation();

  return (
    <header id="main-header">
      <div className="container">
        <a href="/" className="logo">
          <h1>PokeCommerce</h1>
        </a>
        {location.pathname === "/" && <SearchProduct />}
      </div>
    </header>
  );
};

export default MainHeader;
