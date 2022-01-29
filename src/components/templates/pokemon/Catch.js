import React from 'react';
import { Loader } from 'components/atoms/loader';
import { PokemonHeader } from 'components/molecules/pokemon';
import { BaseContainer, FlexContainer } from 'components/atoms/container';
import { BaseButton } from 'components/atoms/button';
import { BaseImage } from 'components/atoms/image';
import { Paragraph } from 'components/atoms/typography';

export default function PokemonCatch({ pokemon, isCatching, catchStatus, catchEvent, cancelEvent }) {
  return (
    <>
      <main 
        style={{ 
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div style={{ flex: '1' }}>
          <BaseContainer
            padding="20px"
          >
            <FlexContainer
              direction="column"
              justify="center"
              align="center"
              gap="10px"
            >
              <PokemonHeader
                title={pokemon.name}
              />
              <BaseImage
                src={pokemon?.image.src}
                alt={pokemon?.image.alt}
                width="250px"
              />
              <BaseContainer>
                <Paragraph>
                  { 
                    catchStatus === 'Fled' ? 
                      `Wild ${pokemon.name} fled!`
                    : catchStatus === 'Catched' ?
                      `Gotcha! ${pokemon.name} was caught!`
                    : `A wild ${pokemon.name} has appeard!`
                  }
                </Paragraph>
              </BaseContainer>
              { isCatching ? 
                  <Loader />
                :
                  <BaseButton
                    type="primary"
                    clickEvent={catchEvent}
                  >
                    Catch
                  </BaseButton>
              }
              <BaseButton
                type="secondary"
                clickEvent={cancelEvent}
              >
                Back
              </BaseButton>
            </FlexContainer>
          </BaseContainer>
        </div>
      </main>
    </>
  )
};
