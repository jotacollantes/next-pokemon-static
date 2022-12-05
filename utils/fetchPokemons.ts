import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const fetchPokemons=async (param:string)=>{

      //* Hacemos la llamada Api en tiempo de build
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${param}/`);
     //!Para enviar solamente la informacion necesaria del pokemon y no todo el json del pokemon
    
     return {
      id: data.id,
      name:data.name,
      sprites: data.sprites
    }

}