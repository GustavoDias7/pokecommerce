import React from "react";
import { GlobalContext } from "../context/GlobalContenxt";

const SearchProduct = () => {
  const { fetchPokemon } = React.useContext(GlobalContext);
  const [search, setSearch] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  function handleChange({ target }) {
    setSearch(target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (search.length === 0) return;
    setLoading(true);
    await fetchPokemon(search.toLowerCase());
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      {loading && <i className="fa fa-circle-o-notch fa-spin"></i>}
      <input type="text" value={search} onChange={handleChange} />
      <button type="submit">
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
};

export default SearchProduct;
