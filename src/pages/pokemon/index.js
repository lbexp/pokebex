import React from 'react';
import PokemonIndex from 'components/templates/PokemonIndex';
import PokemonLogo from 'assets/images/pokemon_logo.png';

export default function Index() {
  return (
    <PokemonIndex
      navbar={{
        logo: { href: '/', src: PokemonLogo, width: 125, height: null },
        menus: [
          { href: '/', children: 'List' },
          { href: '/my-pokemon', children: 'Collection' },
        ]
      }}
    />
  )
};
