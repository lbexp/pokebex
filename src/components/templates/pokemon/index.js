import React from 'react';
import Navbar from 'components/organisms/navbar';
import { PokemonCard } from 'components/organisms/pokemon';
import { GridContainer } from 'components/atoms/container';
import { Loader } from 'components/atoms/loader';

export default function PokemonIndex({ navbar, items }) {
  return (
    <>
      <header>
        <Navbar
          logo={navbar.logo}
          menus={navbar.menus}
        />
      </header> 
      <main 
        style={
          items.loading ? { 
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          } 
          : null
        }
      >
        {
          items.loading ?
            <Loader />
          :
            <GridContainer
              padding="20px"
              gap="15px"
            >
              { items.data?.map((item) => (
                <PokemonCard
                  key={item.id}
                  header={{ title: item.name, subtitle: '0 Owned' }}
                  image={{ src: item.image, alt: item.name }}
                />
              ))}
            </GridContainer>
        }
      </main>
    </>
  )
};
