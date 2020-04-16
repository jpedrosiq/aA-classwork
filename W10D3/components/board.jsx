import React from "react";

class Board extends React.Component {

    constructor(props){
        super(props);
        this.renderTile = this.renderTile.bind(this);
        // might need to bind render as well, and jared is a focking bendah
    }
    render() {
        const board = this.props.board;
        return (
            <div id="board">
                {board.map((row, rowIdx) => {
                    <div id="row" key={`row-${rowIdx}`}>
                        {this.renderTile(row, rowIdx)}
                    </div>
                })}
            </div>
        )
    }

    renderTile(row, i) {
        const board = this.props.board;
        return row.map((tile, j) => {
            return (
                <Tile 
                    tile={tile}        
                    updateGame={this.props.updateGame}          
                    key={i * board.gridSize + j}     
                />
            )
        })
    }



}

export default Board;