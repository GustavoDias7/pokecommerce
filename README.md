# PokeCommerce

## Definition

This's a <a href="https://reactjs.org/">React</a> project that is an e-commerce that the idea is to research and buy Pokémon.

When you enter the webpage, the app generates a list of 12 random Pokémon as a starter catalog. On the right side, there is a cart you can add Pokémon to buy and a button to redirect you to a checkout page. You can also search for a specific Pokémon in the page header.

## Features

- React Hooks such as useState and useEffect were used to change the states(informations) of the application. The useContext Hook was used to store the global informations about the Pokémon and delivery between the components.

- The <a href="https://reactrouter.com/">React Router Dom</a> was used the to handle routes, links and pages.

- To get the informations about the Pokémon, the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">Fetch API</a> was used to consume the <a href="https://pokeapi.co/">PokéAPI - The RESTful Pokémon API</a>.
