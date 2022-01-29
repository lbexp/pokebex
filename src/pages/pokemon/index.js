import React, { useState } from 'react';
import { useQuery } from "@apollo/client";
import { useLiveQuery } from 'dexie-react-hooks';
import PokemonIndex from 'components/templates/pokemon';
import { pokebexIdb } from 'data/pokebex-idb';
import { GET_POKEMONS } from 'graphql/get-pokemons';

function Index() {
  const { loading: graphLoading, error: graphError, data: graphData } = useQuery(GET_POKEMONS, {
    variables: { limit: 10, offset: 1 },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pokemons, setPokemons] = useState([]);

  useLiveQuery(async() => {
    try {
      setIsLoading(true);
      if (!graphLoading && graphData) {
        const promises = await graphData?.pokemons.results.map(async(item) => {
          const catchedAmount = await pokebexIdb.pokemons
            .where('name')
            .equals(item.name)
            .count();
          return { ...item, catched: catchedAmount };
        });
        Promise.all(promises).then((values) => {
          setPokemons(values.map((item) => ({ title: item.name, subtitle: `${item.catched} Catched`, image: item.image })));
          setIsLoading(false);
        });
      }
    } catch(error) {
      setError(error);
      setIsLoading(false);
    }
  }, [graphData]);

  return (
    <PokemonIndex
      navbar={{
        menus: [
          { href: '/', children: 'List' },
          { href: '/my-pokemon', children: 'Collection' },
        ]
      }}
      items={{ loading: isLoading, error: (error || graphError), data: pokemons }}
    />
  )
};

export default Index;
