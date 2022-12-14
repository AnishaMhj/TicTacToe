//Board codes until "Adding time travel" to store the history of moves and show past moves

import React from "react";
import Square from "./square";
import CalculateWinner from "./calculateWinner";

//Board renders 9 squares 
//this is a parent component that is passing props to a child Square component

class Board extends React.Component {
    /* constructor to set the Board's initial state to contain an array of 9 nulls
    corresponding to the 9 squares */
    constructor(props) {
        super(props);
        this.state = {
            //To display a list of past moves. placing history state into the Game component 
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,      //sets the first move to 'X' by default
        };
    }

    //event handler to handle click of a Square
    //.slice() is called to create a copy of the squares array to modify instead of modifying the existing array
    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,        //function to flip the value of xIsNext
        });
    }

    //Passing two props 'value' and 'onClick' from Board to Square
    renderSquare(i) {
        return (
            <Square value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        )
    }

    render() {
        const winner = CalculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        // const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O'); //to display which player has the next turn


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
            </div >
        );
    }
}

export default Board;