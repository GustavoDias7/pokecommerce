import React from "react";

const url = "https://pokeapi.co/api/v2/pokemon/";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [response, setResponse] = React.useState(null);
  const [initial, setInitial] = React.useState([]);
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [searchError, setSearchError] = React.useState(false);
  const [buy, setBuy] = React.useState(false);

  function addCart(newPokemon) {
    const hasName = cart.map((cart) => cart.name).includes(newPokemon.name);
    if (!hasName) {
      setCart([...cart, newPokemon]);
      setTotal(total + newPokemon.price);
      console.log("add", newPokemon.name);
    }
  }

  function removeCart(pokemonObj) {
    setCart(cart.filter((pokemon) => pokemonObj !== pokemon));
    setTotal(total - pokemonObj.price);
  }

  function handleBuy() {
    if (total > 0) {
      setBuy(true);
      return true;
    }
    return false;
  }

  class PokemonResponseData {
    constructor(name, price, photo, abilities, height) {
      this.name = name;
      this.price = price;
      this.photo = photo;
      this.abilities = abilities;
      this.height = height;
    }
  }

  async function fetchPokemon(search, fullDetails = false) {
    await fetch(url + search)
      .then((response) => response.json())
      .then((data) => {
        setResponse(
          !fullDetails
            ? new PokemonResponseData(
                data.name,
                data.base_experience,
                data.sprites.other.dream_world.front_default
              )
            : new PokemonResponseData(
                data.name,
                data.base_experience,
                data.sprites.other.dream_world.front_default,
                data.abilities,
                data.height
              )
        );
        setSearchError(false);
        console.log(response);
      })
      .catch(() => setSearchError(true));
  }

  async function initialFetch() {
    const datas = [];

    for (let i = 0; i < 12; i++) {
      const randomId = Math.floor(Math.random() * 200) + 1;
      await fetch(url + randomId)
        .then((response) => response.json())
        .then((data) =>
          datas.push({
            name: data.name,
            price: data.base_experience,
            photo: data.sprites.other.dream_world.front_default,
          })
        );
    }

    setInitial(datas);
  }

  const values = {
    response,
    fetchPokemon,
    initial,
    initialFetch,
    cart,
    addCart,
    total,
    removeCart,
    searchError,
    setSearchError,
    buy,
    setBuy,
    handleBuy,
  };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

export const useApp = () => {
  const context = React.useContext(GlobalContext);

  if (!context) {
    throw new Error(
      "You must surround your components with a GlobalStorage before call useApp"
    );
  }

  return context;
};
