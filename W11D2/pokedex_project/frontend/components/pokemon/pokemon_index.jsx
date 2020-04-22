import React from 'react';
import PokemonIndexItem from "./pokemon_index_item"

class PokemonIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render () {
        // debugger;
        return (
            <div className="pokemon-index">
                <h1>Pokemon Index</h1>
                <ul className="pokemon-list">
                    {this.props.pokemon.map(poke => <PokemonIndexItem poke={poke}/>)}
                </ul>
            </div>
        )
    }
}

export default PokemonIndex;