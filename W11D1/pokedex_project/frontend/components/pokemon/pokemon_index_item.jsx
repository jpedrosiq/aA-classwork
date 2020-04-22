import React from "react";
import { Link } from "react-router-dom";

class PokemonIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        const { poke } = this.props;
        // debugger
        return (
            <div classname="pokemon-index-item"> 
                <div>
                    <li> {poke.name} </li>
                    <li> <img src={poke.image_url}></img> </li>
                </div>
            </div>
        )
    }
}
export default PokemonIndexItem;

