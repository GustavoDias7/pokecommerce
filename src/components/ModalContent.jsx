import React from "react";
import { Link } from "react-router-dom";

const ModalContent = () => {
  return (
    <>
      <h2>Success!</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <Link to="/">Back to the Home Page</Link>
    </>
  );
};

export default ModalContent;
