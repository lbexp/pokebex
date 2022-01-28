import React from 'react';
import PokemonShow from 'components/templates/pokemon/Show';
import PokemonLogo from 'assets/images/pokemon_logo.png';
import { useQuery } from "@apollo/client";
import { SHOW_POKEMONS } from 'graphql/show-pokemon';

function Show() {
  const { loading, error, data } = useQuery(SHOW_POKEMONS, {
    variables: { name: 'venusaur' },
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
      item={{ loading: loading, error: error, data: data?.pokemon }}
    />
  )
};

export default Show;
