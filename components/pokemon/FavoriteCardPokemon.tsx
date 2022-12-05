import { Card } from "@nextui-org/react";
import React from "react";
import { NextPage } from "next";
import router from "next/router";

interface Props {
  id: number;
}

export const FavoriteCardPokemon = ({ id }: Props) => {
  const onClick =()=>{
    router.push(`/pokemon/${id}`)
  }
  return (
    <Card 
    isHoverable
    isPressable
    css={{ padding: 10 }}
    onClick={onClick}
    >
      <Card.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        width={"100%"}
        height={140}
      ></Card.Image>
    </Card>
  );
};
