import React from 'react';
import {Pokemon, selectPokemonStart} from "../store/slices/pokeSlice";
import {useDispatch} from "react-redux";
import {Card, CardContent, Typography, Button, CardActions, Paper, Grid, Divider} from '@mui/material';

interface PokemonCardProps {
    poke: Pokemon;
}

export function PokemonCard({poke}: PokemonCardProps) {
    const dispatch = useDispatch();
    const handleDetailsClick = () => {
        dispatch(selectPokemonStart(poke.id));
    };

    return (
            <Card>
                <CardContent>
                    <Typography variant="body1" component="p">
                        #{poke.id}
                    </Typography>
                    <Divider/>
                    <Typography variant="h5" component="h2" >
                        {poke.name}
                    </Typography>
                </CardContent>
                <CardActions sx={{justifyContent:'center',alignContent:'center'}}>
                    <Button size='small' variant="outlined" color="primary" onClick={handleDetailsClick}>
                        Details
                    </Button>
                </CardActions>
            </Card>
    );
}

export function PokemonCard2({poke}: PokemonCardProps) {
    const dispatch = useDispatch();
    const handleDetailsClick = () => {
        dispatch(selectPokemonStart(poke.id));
    };
    return (<Paper>
        <Grid container spacing={2}>
            <Grid item xs={7} textAlign={"center"}>
                #{poke.id} : {poke.name}
            </Grid>
            <Grid item xs={5} textAlign={"center"}>
                <Button fullWidth size={"small"} variant="outlined" color="primary" onClick={handleDetailsClick}>
                    Show Details
                </Button>
            </Grid>
        </Grid>
    </Paper>);
}
