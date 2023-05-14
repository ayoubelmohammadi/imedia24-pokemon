import {
    Accordion, AccordionDetails, AccordionSummary, Box,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, Divider,
    Grid, List, ListItem, ListItemText,
    Typography
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/slices";
import {unselectPokemon} from "../store/slices/pokeSlice";
import React, {useEffect, useState} from "react";
import {PokemonDetail} from "../api/pokeApi";
import {ExpandMore} from '@mui/icons-material'

export default function PokemonDetails() {
    const [loading, setLoading] = useState<boolean>(true);
    const dispatch = useDispatch();
    const pokemon = useSelector<RootState, PokemonDetail | null>(state => state.poke.selected)
    const [expandedAccordion, setExpandedAccordion] = useState<string | false>(false);
    const infos: string[] = [
        `ID: ${pokemon?.id}`,
        `Name: ${pokemon?.name}`,
        `base Experience: ${pokemon?.base_experience}`,
        `Height: ${!!pokemon ? pokemon.height : 0 / 10} m`,
        `Weight: ${!!pokemon ? pokemon.weight : 0 / 10} kg`,
    ]

    const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpandedAccordion(isExpanded ? panel : false);
    };
    useEffect(() => {
        setLoading(true)
    }, [pokemon])
    const handleClose = () => {
        setExpandedAccordion(false);
        dispatch(unselectPokemon());
    }
    return (
        <Dialog open={!!pokemon} onClose={handleClose}>
            <DialogTitle>Details for {pokemon?.name} (ID: {pokemon?.id})</DialogTitle>
            <DialogContent>
                {!!pokemon ? (
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} sx={{justifyContent:'center',alignContent:'center'}}>
                            {loading && (
                                <CircularProgress/>
                            )}
                            <img
                                style={loading ? {display: 'none'} : {width: '100%'}}
                                src={pokemon.sprites.front_default}
                                alt={pokemon.name}
                                onLoad={() => setLoading(false)}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                                <List>
                                    {infos.map((detail, index) => (
                                        <>
                                            <ListItem>
                                                <ListItemText primary={detail}/>
                                            </ListItem>
                                            <Divider/>
                                        </>
                                    ))}
                                </List>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Accordion expanded={expandedAccordion === 'abilities'}
                                       onChange={handleAccordionChange('abilities')}>
                                <AccordionSummary expandIcon={<ExpandMore/>}>
                                    <Typography variant="h6">Abilities</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List>
                                        {pokemon.abilities.map((ability, index) => (
                                            <ListItem key={index}>
                                                <ListItemText primary={ability.ability.name}/>
                                            </ListItem>
                                        ))}
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expandedAccordion === 'types'}
                                       onChange={handleAccordionChange('types')}>
                                <AccordionSummary expandIcon={<ExpandMore/>}>
                                    <Typography variant="h6">Types</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List>
                                        {pokemon.types.map((type, index) => (
                                            <ListItem key={index}>
                                                <ListItemText primary={type.type.name}/>
                                            </ListItem>
                                        ))}
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expandedAccordion === 'stats'}
                                       onChange={handleAccordionChange('stats')}>
                                <AccordionSummary expandIcon={<ExpandMore/>}>
                                    <Typography variant="h6">Stats</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List>
                                        {pokemon.stats.map((stat, index) => (
                                            <ListItem key={index}>
                                                <ListItemText primary={`${stat.stat.name}: ${stat.base_stat}`}/>
                                            </ListItem>
                                        ))}
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    </Grid>

                ) : (<Typography variant="body1">"No pokemon is selected"</Typography>)}
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" color="primary" onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}