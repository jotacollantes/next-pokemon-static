import { Card, Grid, Image, Text, Row } from "@nextui-org/react";
import { NextPage, GetStaticProps } from "next";
import React from "react";
import { pokeApi } from "../api";
import { Layout } from "../components/layouts";
import { PokemonCard } from "../components/pokemon";

import { PokemonList, PokemonListResponse } from "../interfaces";

interface Props {
  pokemons: PokemonList[];
}

export const HomePage: NextPage<Props> = ({ pokemons }) => {
  //JSON.stringify(props)
  //console.log(pokemons);
  //return  <li key={pokemon.id}>{`#${pokemon.id} - ${pokemon.name}`}</li>
  return (
    <Layout title={"Listado de Pokemones"}>
      {/* <Button color={"gradient"}>Hola Mundo</Button> */}
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map(({ id, img, name, url }) => {
          return (
            <Grid xs={6} sm={3} md={2} xl={1} key={id}>
              <PokemonCard id={id} img={img} name={name} url={url} />
            </Grid>
          );
        })}
      </Grid.Container>
    </Layout>
  );
};
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  //const { data } = await  // your fetch function here
  //console.log("hola mundo")
  //const endPoint="https://pokeapi.co/api/v2/pokemon?limit=151"

  //! .get es de tipo generico <any, AxiosResponse<any, any>, any> lo que significa que yo le puedo especificar cualquier tipo de dato en este caso le especificare el tipo <PokemonListResponse>
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg

  // PokemonList {
  //   name: string;
  //   url:  string;
  //   id:   number;
  //   img:  string;
  // }

  const newResults: PokemonList[] = data.results.map((pokemon, index) => {
    //let index=1
    return {
      // name:pokemon.name,
      // url:pokemon.url,
      ...pokemon,
      id: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        index + 1
      }.svg`,
    };
  });
  //console.log(data);
  return {
    props: {
      //pokemons:data.results,
      pokemons: newResults,
    },
  };
};

export default HomePage;
