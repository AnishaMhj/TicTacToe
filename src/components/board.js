import React from "react";
import Square from "./square";

//Board renders 9 squares 
//this is a parent component that is passing props to a child Square component

class Board extends React.Component {
    /* constructor to set the Board's initial state to contain an array of 9 nulls
    corresponding to the 9 squares */
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    //event handler to handle click of a Square
    //.slice() is called to create a copy of the squares array to modify instead of modifying the existing array
    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({ squares: squares });
    }

    //Passing two props 'value' and 'onClick' from Board to Square
    renderSquare(i) {
        return (
            <Square value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        )
    }

    render() {``
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;