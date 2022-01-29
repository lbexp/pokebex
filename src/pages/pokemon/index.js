import React from 'react';
import PokemonIndex from 'components/templates/pokemon';
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from 'graphql/get-pokemons';

function Index() {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { limit: 10, offset: 1 },
  });

  return (
    <PokemonIndex
      navbar={{
        menus: [
          { href: '/', children: 'List' },
          { href: '/my-pokemon', children: 'Collection' },
        ]
      }}
      items={{ loading: loading, error: error, data: data?.pokemons?.results }}
      // items={[
      //   { title: 'Geodude', subtitle: 'Dude', img: { src: PokemonLogo, alt: 'Geodude' } },
      //   { title: 'Geodude', subtitle: 'Dude', img: { src: PokemonLogo, alt: 'Geodude' } },
      //   { title: 'Geodude', subtitle: 'Dude', img: { src: PokemonLogo, alt: 'Geodude' } },
      // ]}
    />
  )
};

export default Index;
