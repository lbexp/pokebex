import React from 'react';
import { BaseContainer, FlexContainer } from 'components/atoms/container';
import { IconButton } from 'components/atoms/button';
import { Navbar } from 'components/organisms/navbar';
import { Paragraph, HeadingOne } from 'components/atoms/typography';
import { PokemonCards } from 'components/organisms/pokemon';
import { Loader } from 'components/atoms/loader';
import PokemonLogo from 'assets/images/pokemon_logo.png';

export default function PokemonIndex({ title, navbar, items, pagination }) {
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
            <>
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
              { pagination ?
                <BaseContainer
                  margin="15px 0px 0px 0px"
                >
                  <FlexContainer
                    align="center"
                    justify="center"
                    gap="10px"
                  >
                    <IconButton
                      clickEvent={pagination.prevPageEvent}
                      disabled={pagination.currentPage === 1}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                      </svg>
                    </IconButton>
                    <Paragraph>
                      { pagination.currentPage }
                    </Paragraph>
                    <IconButton
                      clickEvent={pagination.nextPageEvent}
                      disabled={pagination.currentPage === pagination.totalPage}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                      </svg>
                    </IconButton>
                  </FlexContainer>
                </BaseContainer>
                : null
              }
            </>
        }
      </main>
    </>
  )
};
