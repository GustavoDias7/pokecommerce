import React from "react";
import { useParams } from "react-router";
// import { GlobalContext } from "../context/GlobalContenxt";
import MainHeader from "../components/MainHeader";

const PokemonDetails = () => {
  // const { response, fetchPokemon } = React.useContext(GlobalContext);
  const params = useParams();

  // React.useEffect(() => {
  //   fetchPokemon(params.id, true);
  //   console.log(response);
  // });

  return (
    <>
      <MainHeader />
      <section>
        <div className="container">
          <h2>{params.id}</h2>
        </div>
      </section>
    </>
  );
};

export default PokemonDetails;
