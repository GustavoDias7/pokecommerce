import React from "react";
import { useNavigate } from "react-router-dom";

const SearchProduct = () => {
  const [search, setSearch] = React.useState("");
  let navigate = useNavigate();

  function handleChange({ target }) {
    setSearch(target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (search.length !== 0) navigate("search/" + search);
    setSearch("");
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input type="text" value={search} onChange={handleChange} />
      <button type="submit">
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
};

export default SearchProduct;
