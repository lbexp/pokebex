import React from 'react';
import { BaseCard } from 'components/atoms/card';
import { BaseLabel } from 'components/atoms/label';
import { BaseContainer, FlexContainer } from 'components/atoms/container';
import { BaseImage } from 'components/atoms/image';
import { HeadingFour } from 'components/atoms/typography';
import { PokemonHeader } from 'components/molecules/pokemon';

export default function Detail({  }) {
  return (
    <BaseContainer
      // direction="column"
      padding="20px"
      // gap="30px"
    >
      <BaseContainer
        margin="0px 0px 30px 0px"
      >
        <BaseCard>
          <FlexContainer
            align="center"
            justify="center"
            direction="column"
            gap="10px"
          >
            <PokemonHeader
              title="Halo"
              subtitle="Hola"
            />
            <BaseImage
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
              alt="Yo"
              width="250px"
            />
          </FlexContainer>
        </BaseCard>
      </BaseContainer>
      <BaseContainer
        margin="0px 0px 30px 0px"
      >
        <BaseContainer
          margin="0px 0px 10px 0px"
        >
          <HeadingFour>Types:</HeadingFour>
        </BaseContainer>
        <FlexContainer
          justify="unset"
          gap="10px"
        >
          { [1, 2, 3].map((item) => (
            <BaseLabel>Test</BaseLabel>
          )) }
        </FlexContainer>
      </BaseContainer>
      <BaseContainer
        margin="0px 0px 30px 0px"
      >
        <BaseContainer
          margin="0px 0px 10px 0px"
        >
          <HeadingFour>Moves:</HeadingFour>
        </BaseContainer>
        <FlexContainer
          justify="unset"
          gap="10px"
        >
          { [1, 2, 3].map((item) => (
            <BaseLabel>Test</BaseLabel>
          )) }
        </FlexContainer>
      </BaseContainer>
    </BaseContainer>
  )
};
