import { Grid, Card } from "@nextui-org/react";
import React from "react";
import { FavoriteCardPokemon } from "./FavoriteCardPokemon";

interface Props {
  favoritesPokemons: number[];
}
export const ShowFavoritesPokemons = ({ favoritesPokemons }: Props) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritesPokemons.map((id) => (
        <Grid xs={2} sm={3} md={2} xl={1} key={id}>
          <FavoriteCardPokemon id={id} />
        </Grid>
      ))}
    </Grid.Container>
  );
};
