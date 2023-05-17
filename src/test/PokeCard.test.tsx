import {render, waitFor, screen} from "@testing-library/react";
import axios from 'axios';
import {Provider} from "react-redux";
import store from "../store";
import {getPokemonList} from "../api/pokeApi";
import {PokemonCard} from "../components/PokemonCard";
import {Pokemon} from "../store/slices/pokeSlice";

const pekachu: Pokemon = {
    id: 1,
    name: "pekachu",
    url: "some://url.com"
}
test("Poke Card", async () => {
    render(
        <Provider store={store}>
            <PokemonCard poke={pekachu}/>
        </Provider>
    );
    expect(screen.getByText("pekachu")).toBeInTheDocument()

});