import React from 'react';
import { BaseContainer } from 'components/atoms/container';
import { Navbar } from 'components/organisms/navbar';
import { HeadingOne } from 'components/atoms/typography';
import { PokemonCards } from 'components/organisms/pokemon';
import { Loader } from 'components/atoms/loader';
import PokemonLogo from 'assets/images/pokemon_logo.png';

export default function PokemonIndex({ title, navbar, items }) {
  return (
    <>
      <header>
        <Navbar
          logo={{ href: '/', src: PokemonLogo, width: 125, height: null }}
          menus={navbar.menus}
        />
      </header> 
      <main 
        style={{
            padding: '25px'
          }
        }
      >
        <BaseContainer
          margin="0px 0px 25px 0px"
        >
          <HeadingOne
            align="center"
          >
            { title }
          </HeadingOne>
        </BaseContainer>
        {
          items.loading ?
            <div
              style={{ 
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Loader />
            </div>
          :
            <PokemonCards
              data={
                items.data?.map((item) => ({
                  id: item.id,
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
