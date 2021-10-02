import React from "react";
import MainHeader from "../components/MainHeader";

const Checkout = () => {
  return (
    <>
      <MainHeader />
      <section className="checkout">
        <div className="container">
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Credit card" />
            <button tyle="submit" className="gn-button">
              Buy now
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Checkout;
