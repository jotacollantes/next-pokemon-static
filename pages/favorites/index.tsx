import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { Layout } from "../../components/layouts";
import { Container, Text, Image, Grid, Card } from "@nextui-org/react";
import { Nofavorites } from "../../components/ui";
import { pokemons } from "../../utils";
import { ShowFavoritesPokemons } from "../../components/pokemon";

const FavoritesPage: NextPage = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState(pokemons);
  //console.log(favoritesPokemons)
  //!La otra opcion es con un useEffect
  // const [favoritesPokemons, setFavoritesPokemons] = useState<number[]|boolean>([])
  // useEffect(() => {
  //   setFavoritesPokemons(pokemons)
  // }, [])

  return (
    <Layout title="Pokémons - Favoritos">
      {favoritesPokemons.length === 0 ? (
        <Nofavorites />
      ) : (
        <ShowFavoritesPokemons favoritesPokemons={favoritesPokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
