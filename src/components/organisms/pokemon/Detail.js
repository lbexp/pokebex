import React from 'react';
import { BaseContainer } from 'components/atoms/container';
import { PokemonCard, PokemonDescSlider } from 'components/molecules/pokemon';

export default function Detail({ data }) {
  return (
    <BaseContainer
      padding="20px"
    >
      <BaseContainer
        margin="0px 0px 30px 0px"
      >
        <PokemonCard
          header={data.header}
          image={data.image}
        />
      </BaseContainer>
      <PokemonDescSlider 
        title="Types :"
        items={data.types}
      />
      <PokemonDescSlider 
        title="Moves :"
        items={data.moves}
      />
    </BaseContainer>
  )
};
