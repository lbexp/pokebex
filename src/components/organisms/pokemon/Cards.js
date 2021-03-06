import React from 'react';
import { AnchorWrapper } from 'components/atoms/anchor';
import { GridContainer } from 'components/atoms/container';
import { PokemonCard } from 'components/molecules/pokemon';

export default function Cards({ data }) {
  return (
    <GridContainer
      gap="15px"
    >
      { data.map((item, index) => (
        <AnchorWrapper 
          key={index}
          href={`/pokemon/${item.header.title}`}
        >
          <PokemonCard
            id={item.id}
            header={item.header}
            image={item.image}
            action={item.action}
          />
        </AnchorWrapper>
      ))}
    </GridContainer>
  )
};
