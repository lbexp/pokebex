import React from 'react';
import { BaseCard } from 'components/atoms/card';
import { BaseImage } from 'components/atoms/image';
import { FlexContainer } from 'components/atoms/container';
import { PokemonHeader } from 'components/molecules/pokemon';

export default function Header({ header, image }) {
  return (
    <BaseCard
      padding="10px"
    >
      <FlexContainer
        align="center"
        justify="center"
        direction="column"
        gap="10px"
      >
        <BaseImage
          src={image.src}
          alt={image.alt}
          width="250px"
        />
        <PokemonHeader
          title={header.title}
          subtitle={header.subtitle}
        />
      </FlexContainer>
    </BaseCard>
  )
};
