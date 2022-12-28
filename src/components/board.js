import React from "react";
import Square from "./square";

//Board renders 9 squares 
//this is a parent component that is passing props to a child Square component

class Board extends React.Component {
    /* constructor to set the Board's initial state to contain an array of 9 nulls
    corresponding to the 9 squares */

    /* one of the step is to Delete the constructor to show history of moves  and setting setting initial state for the Game conponent within its constructor */
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         //To display a list of past moves. placing history state into the Game component 
    //         history: [{
    //             squares: Array(9).fill(null),
    //         }],
    //         xIsNext: true,      //sets the first move to 'X' by default
    //     };
    // }


    //Passing two props 'value' and 'onClick' from Board to Square
    renderSquare(i) {
        return (
            <Square value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        )
    }

    render() {
        return (
            <div>
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