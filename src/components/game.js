import React from "react";
import Board from "./board";
import CalculateWinner from "./calculateWinner";
//Game renders a board with placeholder value that will modify later

class Game extends React.Component {
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

    //Similar to the render method, move handleClick() from Board to the Game component and update as per Game component's state which is structured differently

    //event handler to handle click of a Square
    //.slice() is called to create a copy of the squares array to modify instead of modifying the existing array
    handleClick(i) {
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (CalculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            xIsNext: !this.state.xIsNext,        //function to flip the value of xIsNext
        });
    }


    render() {

        //Since the Game component rendered the game's status, remove the corresponding code from Board's render method 
        //update render to use the most recent history entry to determiine and display game's status
        const history = this.state.history;
        const current = history[history.length - 1];
        const winner = CalculateWinner(current.squares);

        //Mapping history of moves using map method
        //step variable refers to the current history element value
        //move refers to the current history index
        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li>
                    <button
                        onClick={() => this.jumpTo(move)}
                    >{desc}</button>
                </li>
            );
        });


        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }


        return (
            <div className="game">
                <div className="game-board">
                    {/* update  */}
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}
export default Game;
