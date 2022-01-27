import React from 'react';
import Navbar from 'components/organisms/navbar';

export default function PokemonIndex({ navbar }) {
  return (
    <div>
      <Navbar
        logo={navbar.logo}
        menus={navbar.menus}
      />
    </div>
  )
};
