import React from 'react';
import Navbar from 'components/organisms/navbar';
import { PokemonCard } from 'components/organisms/pokemon';
import { GridContainer } from 'components/atoms/container';

export default function PokemonIndex({ navbar, items }) {
  return (
    <>
      <header>
        <Navbar
          logo={navbar.logo}
          menus={navbar.menus}
        />
      </header>
      <main>
        <GridContainer
          padding="20px 15px"
          gap="15px"
        >
          { items.map((item, index) => (
            <PokemonCard
              key={index}
              header={{ title: item.title, subtitle: item.subtitle }}
              image={{ src: item.img.src, alt: item.img.alt }}
            />
          ))}
        </GridContainer>
      </main>
    </>
  )
};
