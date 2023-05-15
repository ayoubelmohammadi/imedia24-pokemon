import InfiniteScroll from 'react-infinite-scroll-component';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {useEffect, useState} from "react";
import {getPokemonListStart, Pokemon} from "../store/slices/pokeSlice";
import {Grid} from "@mui/material";
import {PokemonCard} from "./PokemonCard";

export default function PokemonList() {
    const dispatch = useDispatch();
    const [page, setPage] = useState<number>(0);
    const pokemons = useSelector<RootState, Pokemon[]>(state => state.poke.pokemonList)
    useEffect(() => {
        dispatch(getPokemonListStart(page));
    }, [dispatch, page]);
    return (
        <InfiniteScroll
            dataLength={pokemons.length} //This is important field to render the next data
            next={() => setPage(page + 1)}
            hasMore={true}
            loader={<h4>Loading...</h4>}
        >
            <Grid container spacing={4}>
                {pokemons.map(e =>
                    (
                        <Grid data-testid='poke' key={e.id}  item xs={12} sm={6} md={4} lg={12/5} >
                            <PokemonCard poke={e}/>
                        </Grid>
                    )
                )}
            </Grid>
        </InfiniteScroll>
    );
}