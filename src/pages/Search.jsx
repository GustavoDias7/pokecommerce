import React from "react";
import { GlobalContext } from "../context/GlobalContenxt";
import FullProduct from "../components/FullProduct";
import { useParams } from "react-router";
import Loading from "../components/Loading";

const Search = () => {
  const { fullResponse, fetchFullPokemon, searchError } =
    React.useContext(GlobalContext);
  const params = useParams();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      await fetchFullPokemon(params.id);
      setLoading(false);
    })();
  }, [params.id]);

  return (
    <main>
      <div className="container">
        {loading && <Loading />}
        {!loading && searchError && (
          <h2 className="error-search">
            The Pokémon "{params.id}" doesn't exist.
          </h2>
        )}
        {!loading && !searchError && fullResponse && (
          <FullProduct info={fullResponse} />
        )}
      </div>
    </main>
  );
};

export default Search;
