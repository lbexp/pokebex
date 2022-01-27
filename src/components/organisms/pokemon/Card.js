import React from 'react';
import { BaseCard } from 'components/atoms/card';
import { PokemonHeader } from 'components/molecules/pokemon';

export default function Header({ header }) {
  return (
    <BaseCard>
      <PokemonHeader
        title={header.title}
        subtitle={header.subtitle}
      />
    </BaseCard>
  )
};
