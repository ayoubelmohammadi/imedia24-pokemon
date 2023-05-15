import {render, waitFor, screen} from "@testing-library/react";
import PokemonList from "../components/PokemonList";
import axios from 'axios';
import {Provider} from "react-redux";
import store from "../store";
import {getPokemonList} from "../api/pokeApi";


const pokeMock = {
    "count": 1281,
    "next": "https://pokeapi.co/api/v2/pokemon?offset=24&limit=24",
    "previous": null,
    "results": [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon/2/"
        },
        {
            "name": "venusaur",
            "url": "https://pokeapi.co/api/v2/pokemon/3/"
        },
        {
            "name": "charmander",
            "url": "https://pokeapi.co/api/v2/pokemon/4/"
        },
        {
            "name": "charmeleon",
            "url": "https://pokeapi.co/api/v2/pokemon/5/"
        },
        {
            "name": "charizard",
            "url": "https://pokeapi.co/api/v2/pokemon/6/"
        },
        {
            "name": "squirtle",
            "url": "https://pokeapi.co/api/v2/pokemon/7/"
        },
        {
            "name": "wartortle",
            "url": "https://pokeapi.co/api/v2/pokemon/8/"
        },
        {
            "name": "blastoise",
            "url": "https://pokeapi.co/api/v2/pokemon/9/"
        },
        {
            "name": "caterpie",
            "url": "https://pokeapi.co/api/v2/pokemon/10/"
        },
        {
            "name": "metapod",
            "url": "https://pokeapi.co/api/v2/pokemon/11/"
        },
        {
            "name": "butterfree",
            "url": "https://pokeapi.co/api/v2/pokemon/12/"
        },
        {
            "name": "weedle",
            "url": "https://pokeapi.co/api/v2/pokemon/13/"
        },
        {
            "name": "kakuna",
            "url": "https://pokeapi.co/api/v2/pokemon/14/"
        },
        {
            "name": "beedrill",
            "url": "https://pokeapi.co/api/v2/pokemon/15/"
        },
        {
            "name": "pidgey",
            "url": "https://pokeapi.co/api/v2/pokemon/16/"
        },
        {
            "name": "pidgeotto",
            "url": "https://pokeapi.co/api/v2/pokemon/17/"
        },
        {
            "name": "pidgeot",
            "url": "https://pokeapi.co/api/v2/pokemon/18/"
        },
        {
            "name": "rattata",
            "url": "https://pokeapi.co/api/v2/pokemon/19/"
        },
        {
            "name": "raticate",
            "url": "https://pokeapi.co/api/v2/pokemon/20/"
        },
        {
            "name": "spearow",
            "url": "https://pokeapi.co/api/v2/pokemon/21/"
        },
        {
            "name": "fearow",
            "url": "https://pokeapi.co/api/v2/pokemon/22/"
        },
        {
            "name": "ekans",
            "url": "https://pokeapi.co/api/v2/pokemon/23/"
        },
        {
            "name": "arbok",
            "url": "https://pokeapi.co/api/v2/pokemon/24/"
        }
    ]
}

const getPokemonsMock = jest.fn(getPokemonList => pokeMock);
test("Poke List", async () => {
    render(
        <Provider store={store}>
            <PokemonList/>
        </Provider>
    );

    const list = await waitFor(() => screen.findAllByTestId("poke"));
    expect(list).toHaveLength(24);
});