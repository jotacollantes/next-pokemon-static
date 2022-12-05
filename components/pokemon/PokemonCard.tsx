import { Card, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";
import { PokemonList } from "../../interfaces";

export const PokemonCard = ({ name, url, id, img }: PokemonList) => {
  const router = useRouter()
  const onClick =() => {
    //router.push(`/pokemon/${id}`)
    router.push(`/name/${name}`)
  }
  return (
    <Card
    isHoverable={true}
    isPressable={true}
    onClick={onClick}
    >
      <Card.Body css={{ p: 1 }}>
        <Card.Image src={img} width="100%" height={140} />
      </Card.Body>
      <Card.Footer>
        <Row justify="space-between">
          <Text transform="capitalize">{name}</Text>
          <Text># {id}</Text>
        </Row>
      </Card.Footer>
    </Card>
  );
};
