import React from "react";
import ModalContent from "../components/ModalContent";
import { GlobalContext } from "../context/GlobalContenxt";
import useModal from "../hooks/useModal";

const Checkout = () => {
  const { total } = React.useContext(GlobalContext);
  const [Buy, setBuy] = useModal();
  const [Consult, setConsult] = useModal();
  const [form, setForm] = React.useState({
    name: "",
    credit: "",
  });

  function handleChange({ target }) {
    const { value, id } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setBuy(true);
  }

  return (
    <section>
      <div className="container">
        <form className="checkout" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            autoFocus={true}
          />
          <input
            type="text"
            id="credit"
            placeholder="Credit card"
            value={form.credit}
            onChange={handleChange}
          />
          <p>
            Total: <strong>{total}</strong>
          </p>
          <button className="gn-button">Buy now</button>
        </form>
        <Buy
          className="buy"
          element={<ModalContent />}
          triggerClick={setConsult}
        />
        <Consult element={<ModalContent />} />
      </div>
    </section>
  );
};

export default Checkout;
