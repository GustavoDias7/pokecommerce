import React from "react";
import { GlobalContext } from "../context/GlobalContenxt";
import FullProduct from "../components/FullProduct";
import { useParams } from "react-router";

const Search = () => {
  const { fullResponse, fetchFullPokemon, searchError } =
    React.useContext(GlobalContext);
  const params = useParams();

  React.useEffect(() => {
    (async () => {
      await fetchFullPokemon(params.id);
    })();
  }, [params.id]);

  return (
    <main>
      <div className="container">
        {searchError && <h2>The Pokémon "{params.id}" doesn't exist.</h2>}
        {!searchError && fullResponse && <FullProduct info={fullResponse} />}
      </div>
    </main>
  );
};

export default Search;
