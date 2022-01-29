import Dexie from 'dexie';

export const pokebexIdb = new Dexie('pokebex');

pokebexIdb.version(1).stores({
  pokemons: '++id, name, nickname',
});
