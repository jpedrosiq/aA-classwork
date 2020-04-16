import React from "react";
import Tile from './tile';
// import Board from "board";
import * as Minesweeper from "../minesweeper";

class Game extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            board: new Minesweeper.Board(10, 10)
        }
        this.updateGame = this.updateGame.bind(this)
    }

    updateGame(){

    }

    render(){
        
        return (
            <div>                
                {/* <Board board={this.state.board} updateGame={this.updateGame()}/> */}
                <Tile />
            </div>
        )
    }

};

export default Game;
