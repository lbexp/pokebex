import React from 'react';
import Navbar from 'components/organisms/navbar';
import PokemonLogo from 'assets/images/pokemon_logo.png';

export default function Index() {
  return (
    <div>
      <Navbar
        logo={{ href: '/', src: PokemonLogo, width: 125, height: null }}
        menus={[
          { href: '/', children: 'List' },
          { href: '/my-pokemon', children: 'Mine' },
        ]}
      />
    </div>
  )
}
