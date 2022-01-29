import React from 'react';
import { Loader } from 'components/atoms/loader';
import { Navbar } from 'components/organisms/navbar';
import { PokemonDetail } from 'components/organisms/pokemon';
import { FloatButton } from 'components/atoms/button';
import PokeballIcon from 'assets/images/pokeball_icon.png';

export default function PokemonIndex({ navbar, item }) {
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
          item.loading ? { 
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          } 
          : null
        }
      >
        {
          item.loading ?
            <Loader />
          :
            <>
              <PokemonDetail
                data={item.data}
              />
              <FloatButton
                img={PokeballIcon}
              />
            </>
        }
      </main>
    </>
  )
};
