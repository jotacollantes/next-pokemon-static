export interface PokemonListResponse {
    count:    number;
    next?:     string;
    previous?: string;
    results:  PokemonList[];
}

export interface PokemonList {
    name: string;
    url:  string;
    //!NO necesariamente tienen que venir de la respuesta del api rest
    id:   number;
    img:  string;
}
