import pokeAPI from './index';

interface Pokemon {
    name: string;
    url: string;
}

interface PokemonAbility {
    ability: {
        name: string;
    };
    is_hidden: boolean;
    slot: number;
}

interface PokemonType {
    slot: number;
    type: {
        name: string;
    };
}

interface PokemonStat {
    base_stat: number;
    stat: {
        name: string;
    };
}

export interface PokemonDetail {
    id: number;
    name: string;
    height: number;
    weight: number;
    base_experience: number;
    abilities: PokemonAbility[];
    types: PokemonType[];
    stats: PokemonStat[];
    sprites: {
        front_default: string;
    };
}


export interface PokemonListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[];
}

interface GetPokemonListParams {
    page?: number;
}


export async function getPokemonList({page = 0}: GetPokemonListParams): Promise<PokemonListResponse> {
    try {
        const response = await pokeAPI.get<PokemonListResponse>('pokemon', {
            params: {
                limit: 24,
                offset: page * 24,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching Pokémon list:', error);
        throw error;
    }
}

export async function getPokemonDetail(id: number): Promise<PokemonDetail> {
    try {
        const response = await pokeAPI.get(`pokemon/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Pokémon list:', error);
        throw error;
    }
}