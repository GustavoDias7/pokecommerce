import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [response, setResponse] = React.useState(null);
  const [fullResponse, setFullResponse] = React.useState(null);
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
    constructor(name, price, photo, abilities, height, description) {
      this.name = name;
      this.price = price;
      this.photo = photo;
      this.abilities = abilities;
      this.height = height;
      this.description = description;
    }
  }

  const url = "https://pokeapi.co/api/v2/pokemon/";

  async function fetchPokemon(search) {
    await fetch(url + search)
      .then((response) => response.json())
      .then((data) => {
        setResponse(
          new PokemonResponseData(
            data.name,
            data.base_experience,
            data.sprites.other.dream_world.front_default
          )
        );
        setSearchError(false);
      })
      .catch(() => setSearchError(true));
  }

  async function fetchFullPokemon(search) {
    await fetch(url + search)
      .then((res) => res.json())
      .then(getDescription)
      .catch(() => setSearchError(true));
  }
  async function getDescription(myData) {
    const dataUrl = myData.species.url;
    await fetch(dataUrl)
      .then((res) => res.json())
      .then((data) => {
        setFullResponse(
          new PokemonResponseData(
            myData.name,
            myData.base_experience,
            myData.sprites.other.dream_world.front_default,
            myData.abilities,
            myData.height,
            data.flavor_text_entries
              .find((flavor) => flavor.language.name === "en")
              .flavor_text.replace("POKéMON", "Pokémon")
          )
        );
      });
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
    fullResponse,
    setFullResponse,
    fetchPokemon,
    fetchFullPokemon,
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
