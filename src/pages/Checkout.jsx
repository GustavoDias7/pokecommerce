import React from "react";

const Checkout = () => {
  return (
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
  );
};

export default Checkout;
