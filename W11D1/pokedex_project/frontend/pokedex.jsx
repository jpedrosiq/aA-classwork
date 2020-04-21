import React from 'react';
import ReactDOM from 'react-dom';
import { RECEIVE_ALL_POKEMON } from './actions/pokemon_actions'
import { receiveAllPokemon } from './actions/pokemon_actions'
import {fetchAllPokemon} from './util/api_util'

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    window.RECEIVE_ALL_POKEMON = RECEIVE_ALL_POKEMON;
    window.receiveAllPokemon = receiveAllPokemon;
    window.fetchAllPokemon = fetchAllPokemon;
    ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});