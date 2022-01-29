import React from 'react';
import { BaseCard } from 'components/atoms/card';
import { BaseImage } from 'components/atoms/image';
import { BaseButton } from 'components/atoms/button';
import { FlexContainer } from 'components/atoms/container';
import { PokemonHeader } from 'components/molecules/pokemon';

export default function Card({ header, image, action }) {
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
        <PokemonHeader
          title={header.title}
          subtitle={header.subtitle}
        />
        <BaseImage
          src={image.src}
          alt={image.alt}
          width="250px"
        />
        { action?.release ?
            <BaseButton
              styleType="primary"
              clickEvent={(event) => {
                event.preventDefault();
                action?.release(header.title);
              }}
            >
              Release
            </BaseButton>
          : null
        }
      </FlexContainer>
    </BaseCard>
  )
};
