import React, { useState } from 'react';
import { useQuery } from "@apollo/client";
import { useLiveQuery } from 'dexie-react-hooks';
import PokemonIndex from 'components/templates/pokemon';
import { pokebexIdb } from 'data/pokebex-idb';
import { GET_POKEMONS } from 'graphql/get-pokemons';

function Index() {
  const LIMIT_GRAPH_DATA = 10;
  const [graphDataOffset, setGraphDataOffset] = useState(0);
  const { loading: graphLoading, error: graphError, data: graphData } = useQuery(GET_POKEMONS, {
    variables: { limit: LIMIT_GRAPH_DATA, offset: graphDataOffset },
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

  const getNextPokemonPage = () => {
    setGraphDataOffset(graphDataOffset + LIMIT_GRAPH_DATA);
  };

  const getPrevPokemonPage = () => {
    setGraphDataOffset(graphDataOffset - LIMIT_GRAPH_DATA);
  }

  return (
    <PokemonIndex
      title="Pokemon List"
      navbar={{
        menus: [
          { href: '/', children: 'List' },
          { href: '/my-pokemon', children: 'Collection' },
        ]
      }}
      items={{ loading: isLoading, error: (error || graphError), data: pokemons }}
      pagination={{
        currentPage: graphDataOffset / LIMIT_GRAPH_DATA + 1,
        totalPage: Math.round(graphData?.pokemons.count / LIMIT_GRAPH_DATA),
        nextPageEvent: getNextPokemonPage,
        prevPageEvent: getPrevPokemonPage,
      }}
    />
  )
};

export default Index;
