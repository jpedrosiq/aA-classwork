import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import PokemonIndexContainer from '../components/pokemon/pokemon_index_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
        <Route path="/" component={PokemonIndexContainer} />
    </HashRouter>
  </Provider>
);

export default Root;

// Always render something CONTAINER inside the Provider