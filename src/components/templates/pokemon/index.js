import React from 'react';
import { Navbar } from 'components/organisms/navbar';
import { PokemonCards } from 'components/organisms/pokemon';
import { Loader } from 'components/atoms/loader';
import PokemonLogo from 'assets/images/pokemon_logo.png';

export default function PokemonIndex({ navbar, items }) {
  return (
    <>
      <header>
        <Navbar
          logo={{ href: '/', src: PokemonLogo, width: 125, height: null }}
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
            <PokemonCards
              data={
                items.data?.map((item) => ({
                  header: { title: item.title, subtitle: item.subtitle },
                  image: { src: item.image, alt: item.title },
                  action: { release: item.action?.release },
                }))
              }
            />
        }
      </main>
    </>
  )
};
