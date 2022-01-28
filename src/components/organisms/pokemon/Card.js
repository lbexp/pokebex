import React from 'react';
import { BaseCard } from 'components/atoms/card';
import { BaseImage } from 'components/atoms/image';
import { AnchorWrapper } from 'components/atoms/anchor';
import { FlexContainer } from 'components/atoms/container';
import { PokemonHeader } from 'components/molecules/pokemon';

export default function Card({ header, image }) {
  return (
    <AnchorWrapper 
      href={`/pokemon/${header.title}`}
    >
      <BaseCard
        padding="10px"
      >
        <FlexContainer
          align="center"
          justify="center"
          direction="column"
          gap="10px"
        >
          <PokemonHeader
            title={header.title}
            subtitle={header.subtitle}
          />
          <BaseImage
            src={image.src}
            alt={image.alt}
            width="250px"
          />
        </FlexContainer>
      </BaseCard>
    </AnchorWrapper>
  )
};
