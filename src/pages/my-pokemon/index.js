import React, { useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { pokebexIdb } from 'data/pokebex-idb';
import PokemonIndex from 'components/templates/pokemon';

function Index() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [catchedPokemons, setCatchedPokemons] = useState([]);

  const releasePokemon = (catchedId) => {
    pokebexIdb.pokemons.delete(catchedId);
  };

  useLiveQuery(async() => {
    try {
      setIsLoading(true);
      const queryPokemons =  await pokebexIdb.pokemons.toArray();
      setCatchedPokemons(
        queryPokemons.map((item) => ({
          id: item.id,
          title: item.name,
          subtitle: item.nickname,
          image: item.image,
          action: {
            release: releasePokemon,
          },
        }))
      );
      setIsLoading(false);
    } catch(error) {
      setError(error);
    }
  });

  return (
    <PokemonIndex
      title="My Pokemons"
      navbar={{
        menus: [
          { href: '/', children: 'List' },
          { href: '/my-pokemon', children: 'Collection' },
        ]
      }}
      items={{ loading: isLoading, error: error, data: catchedPokemons }}
    />
  )
};

export default Index;
