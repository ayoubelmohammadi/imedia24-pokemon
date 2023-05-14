import React from 'react';
import {Container, Typography} from "@mui/material";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";

function App() {
    return (
        <>
            <Container>
                <Typography variant='h1'>
                    Pokémons
                </Typography>
                <PokemonList/>
            </Container>
            <PokemonDetails/>
        </>
    );
}

export default App;
