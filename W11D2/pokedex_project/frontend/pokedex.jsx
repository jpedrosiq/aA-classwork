import React from 'react';
import ReactDOM from 'react-dom';
import { RECEIVE_ALL_POKEMON } from './actions/pokemon_actions'
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions'
import {fetchAllPokemon} from './util/api_util'
import configureStore from './store/store';
import {selectAllPokemon} from './reducers/selectors';
import Root from './components/root';
import { HashRouter, Route } from "react-router-dom";

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    const store = configureStore();
    // window.RECEIVE_ALL_POKEMON = RECEIVE_ALL_POKEMON;
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.selectAllPokemon = selectAllPokemon;
    // window.receiveAllPokemon = receiveAllPokemon;
    // window.requestAllPokemon = requestAllPokemon;
    // window.fetchAllPokemon = fetchAllPokemon;
    ReactDOM.render(<Root store={store}/>, rootEl); // everything passed on store will be available for the Root component
});