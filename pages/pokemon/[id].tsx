import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";
import { existInFavorites, fetchPokemons, toggleFavorite } from "../../utils";
import confetti from "canvas-confetti";
interface Props {
  pokemon: Pokemon;
}

const PokemonPage = ({ pokemon }: Props) => {
  //const router = useRouter();
  //console.log(pokemon);

  const [existe, setExiste] = useState(existInFavorites(pokemon.id));

  const onToggleFavorite = () => {
    console.log("1", existe);

    if (!existe) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0,
        },
      });
    }
     toggleFavorite(pokemon.id);
    setExiste(!existe);
    
  };

  return (
    <>
      <Layout title={pokemon.name}>
        <Grid.Container css={{ marginTop: "5px" }} gap={2}>
          <Grid xs={12} sm={4}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "./mo-image-png"
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Grid>

          <Grid xs={12} sm={8}>
            <Card>
              <Card.Header
                css={{ display: "flex", justifyContent: "space-between" }}
              >
                <Text h1 transform="capitalize">
                  {pokemon.name}
                </Text>
                <Button
                  color="gradient"
                  ghost={existe ? true : false}
                  //onClick={onToggleFavorite}
                  onPress={onToggleFavorite}
                >
                  {existe ? "Borrar de Favoritos" : "Guardar en Favoritos"}
                </Button>
              </Card.Header>
              <Card.Body>
                <Text size={30}>Sprites:</Text>
                <Container direction="row" display="flex">
                  <Image
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    width={200}
                    height={200}
                  />
                  <Image
                    src={pokemon.sprites.back_default}
                    alt={pokemon.name}
                    width={200}
                    height={200}
                  />
                  <Image
                    src={pokemon.sprites.front_shiny}
                    alt={pokemon.name}
                    width={200}
                    height={200}
                  />
                  <Image
                    src={pokemon.sprites.back_shiny}
                    alt={pokemon.name}
                    width={200}
                    height={200}
                  />
                </Container>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </Layout>
    </>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  //!Creo 151 indices de pokemones
  let pokemons151 = [];
  for (let index = 1; index <= 151; index++) {
    pokemons151.push(`${index}`);
  }
  //console.log(pokemons151)
  //!Otra manera de hacerlo es
  //*const pokemon151=[...Array(151)].map((value,index) => `${index + 1}`)

  return {
    // paths:[
    //     { params: { id: '1' } },
    //   { params: { id: '2' } },
    //    { params: { id: '3' } },
    //  ],
    //!Genero dinamicante los paths
    paths: pokemons151.map((id) => {
      return { params: { id: id } };
    }),

    //! SI el usuario ingresa un id y no existe una pagina pre renderizada, se va a mostrar la pagina 404
    fallback: false,
  };
};

//!Despues de que se ejecuta getStaticPaths los params son enviados a getStaticProps para su ejecucion

export const getStaticProps: GetStaticProps = async ({ params }) => {
  //*Aqui si necesitamos los argumentos que vienen en el URL, esa informacion la podemos obtener del contexto CTX
  //console.log(params) //devuelve {id:'1'}
  const { id } = params as { id: string }; //* tipado
  //* Hacemos la llamada Api en tiempo de build


  return {
    props: {
      pokemon: await fetchPokemons(id)
    },
  };
};

export default PokemonPage;
