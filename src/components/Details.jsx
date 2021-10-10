import React from "react";
import { GlobalContext } from "../context/GlobalContenxt";
import FullProduct from "./FullProduct";
import { useParams } from "react-router";

const Details = () => {
  const { fullResponse, fetchFullPokemon } = React.useContext(GlobalContext);
  const params = useParams();

  React.useEffect(() => {
    (async () => {
      await fetchFullPokemon(params.id);
    })();
  }, [params.id]);

  return (
    <div className="details">
      {fullResponse && <FullProduct info={fullResponse} />}
    </div>
  );
};

export default Details;
