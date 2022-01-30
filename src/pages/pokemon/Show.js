import React, { useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { SHOW_POKEMONS } from 'graphql/show-pokemon';
import { pokebexIdb } from 'data/pokebex-idb';
import PokemonShow from 'components/templates/pokemon/Show';
import PokemonCatch from 'components/templates/pokemon/Catch';

function Show() {
  const { name } = useParams();
  const [isInCatchMode, setIsInCatchMode] = useState(false);
  const [isCatching, setIsCatching] = useState(false);
  const [catchStatus, setCatchStatus] = useState(null);
  const [pokemonNickname, setPokemonNickname] = useState('');
  const [pokemonSaveError, setPokemonSaveError] = useState(null);

  const { loading, error, data } = useQuery(SHOW_POKEMONS, {
    variables: { name: name },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [idbError, setIdbError] = useState(null);
  const [pokemon, setPokemon] = useState([]);

  useLiveQuery(async() => {
    try {
      setIsLoading(true);
      if (!loading && data) {        
        const catchedAmount = await pokebexIdb.pokemons
          .where('name')
          .equals(data?.pokemon.name)
          .count();

        setPokemon({
          name: data?.pokemon.name,
          image: data?.pokemon.sprites.front_default,
          types: data?.pokemon.types.map((type) => type.type.name),
          moves: data?.pokemon.moves.map((move) => move.move.name),
          catched: catchedAmount,
        });
        setIsLoading(false);
      }
    } catch(error) {
      setIdbError(error);
      setIsLoading(false);
    }
  }, [data]);
  
  const startCatch = () => {
    setIsInCatchMode(true);
  };

  const cancelCatch = () => {
    setIsInCatchMode(false);
    setIsCatching(false);
    setCatchStatus(null);
  };

  const catchPokemon = () => {
    const chanceNumber = Math.random() * 100;
    setIsCatching(true);

    setTimeout(() => {
      if (chanceNumber > 50) {
        setIsCatching(false);
        setCatchStatus('Catched');
      } else {
        setIsCatching(false);
        setCatchStatus('Fled');
      }
    }, 2000);
  };

  const setNickname = (event) => {
    setPokemonNickname(event.target.value);
  };

  const savePokemon = async(event) => {
    event.preventDefault();

    try {
      const isNicknameTaken = await pokebexIdb.pokemons
        .where('nickname')
        .equals(pokemonNickname)
        .count();

      if (!isNicknameTaken) {
        await pokebexIdb.pokemons.add({
          name,
          nickname: pokemonNickname,
          image: data?.pokemon.sprites.front_default,
        });

        cancelCatch();
      } else {
        setPokemonSaveError('Nickname is already taken!');
      }
    } catch(error) {
      setPokemonSaveError('Failed to save the pokemon.');
    };
  };

  return (
    <>
      { isInCatchMode ?
          <PokemonCatch
            pokemon={{
              name: data?.pokemon.name,
              image: {
                src: data?.pokemon.sprites.front_default,
                alt: data?.pokemon.name,
              }
            }}
            isCatching={isCatching}
            catchStatus={catchStatus}
            catchEvent={catchPokemon}
            saveEvent={savePokemon}
            nickname={pokemonNickname}
            setNickname={setNickname}
            cancelEvent={cancelCatch}
            catchError={pokemonSaveError}
          />
        :
          <PokemonShow
            navbar={{
              menus: [
                { href: '/', children: 'List' },
                { href: '/my-pokemon', children: 'Collection' },
              ]
            }}
            item={{
              loading: isLoading,
              error: error || idbError,
              data: {
                header: {
                  title: pokemon.name,
                  subtitle: `${pokemon.catched} Catched`,
                },
                image: {
                  src: pokemon.image,
                  alt: pokemon.name,
                },
                types: pokemon.types,
                moves: pokemon.moves,
              }
            }}
            floatEvent={startCatch}
          />
      }
    </>
  )
};

export default Show;
