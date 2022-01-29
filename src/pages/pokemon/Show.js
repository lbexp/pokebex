import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import PokemonShow from 'components/templates/pokemon/Show';
import PokemonCatch from 'components/templates/pokemon/Catch';
import { useQuery } from "@apollo/client";
import { SHOW_POKEMONS } from 'graphql/show-pokemon';

function Show() {
  const { name } = useParams();
  const [isInCatchMode, setIsInCatchMode] = useState(false);
  const [isCatching, setIsCatching] = useState(false);
  const [catchStatus, setCatchStatus] = useState(null);
  const [pokemonNickname, setPokemonNickname] = useState('');

  const { loading, error, data } = useQuery(SHOW_POKEMONS, {
    variables: { name: name },
  });
  
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
    console.log('Catching...');

    setTimeout(() => {
      if (chanceNumber > 50) {
        setIsCatching(false);
        setCatchStatus('Catched');
        console.log('Success');
      } else {
        setIsCatching(false);
        setCatchStatus('Fled');
        console.log('Fail');
      }
    }, 2000);
  };

  const setNickname = (event) => {
    setPokemonNickname(event.target.value);
  };

  const savePokemon = (event) => {
    event.preventDefault();
    console.log('saving..')
    console.log(pokemonNickname);
    cancelCatch();
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
              loading: loading,
              error: error,
              data: {
                header: {
                  title: data?.pokemon.name,
                  subtitle: '0 Owned'
                },
                image: {
                  src: data?.pokemon.sprites.front_default,
                  alt: data?.pokemon.name
                },
                types: data?.pokemon.types.map((type) => type.type.name),
                moves: data?.pokemon.moves.map((move) => move.move.name)
              }
            }}
            floatEvent={startCatch}
          />
      }
    </>
  )
};

export default Show;
