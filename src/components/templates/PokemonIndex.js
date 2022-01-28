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
        {
          items.loading ?
            <p>Loading...</p>
          :
            <GridContainer
              padding="20px 15px"
              gap="15px"
            >
              { items.data?.map((item, index) => (
                <PokemonCard
                  key={index}
                  header={{ title: item.name, subtitle: item.nickname }}
                  image={{ src: item.image, alt: item.name }}
                />
              ))}
            </GridContainer>
        }
      </main>
    </>
  )
};
