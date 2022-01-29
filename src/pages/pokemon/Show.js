import React from 'react';
import { useParams } from "react-router-dom";
import PokemonShow from 'components/templates/pokemon/Show';
import PokemonLogo from 'assets/images/pokemon_logo.png';
import { useQuery } from "@apollo/client";
import { SHOW_POKEMONS } from 'graphql/show-pokemon';

function Show() {
  const { name } = useParams();
  const { loading, error, data } = useQuery(SHOW_POKEMONS, {
    variables: { name: name },
  });

  return (
    <PokemonShow
      navbar={{
        logo: { href: '/', src: PokemonLogo, width: 125, height: null },
        menus: [
          { href: '/', children: 'List' },
          { href: '/my-pokemon', children: 'Collection' },
        ]
      }}
      item={{
        loading: loading,
        error: error,
        data: {
          header: {
            title: data?.pokemon.name,
            subtitle: '0 Owned'
          },
          image: {
            src: data?.pokemon.sprites.front_default,
            alt: data?.pokemon.name
          },
          types: data?.pokemon.types.map((type) => type.type.name),
          moves: data?.pokemon.moves.map((move) => move.move.name)
        }
      }}
    />
  )
};

export default Show;
