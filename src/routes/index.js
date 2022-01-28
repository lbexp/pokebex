import PokemonIndex from 'pages/pokemon';
import PokemonShow from 'pages/pokemon/Show';
import MyPokemonIndex from 'pages/my-pokemon';

const routes = [
  {
    path: '/',
    component: PokemonIndex,
  },
  {
    path: '/pokemon/:id',
    component: PokemonShow,
  },
  {
    path: '/my-pokemon',
    component: MyPokemonIndex,
  },
];

export default routes;
