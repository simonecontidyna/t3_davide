import React, { useState } from 'react';
import './App.css';

const POSITION_LABELS = [
  'top-left', 'top-center', 'top-right',
  'middle-left', 'center', 'middle-right',
  'bottom-left', 'bottom-center', 'bottom-right',
];

function Square({ value, onClick, position }) {
  const label = value
    ? `Square ${position}, marked ${value}`
    : `Square ${position}, empty`;

  return (
    <button
      className="square"
      onClick={onClick}
      aria-label={label}
    >
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(Boolean);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else if (isDraw) {
    status = 'Draw! No winner.';
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="game" role="main">
      <div className="game-board">
        <h1>Tic Tac Toe</h1>
        <div className="status" aria-live="polite" role="status">{status}</div>
        <div className="board" role="grid" aria-label="Tic Tac Toe board">
          <div className="board-row" role="row">
            <Square value={squares[0]} onClick={() => handleClick(0)} position={POSITION_LABELS[0]} />
            <Square value={squares[1]} onClick={() => handleClick(1)} position={POSITION_LABELS[1]} />
            <Square value={squares[2]} onClick={() => handleClick(2)} position={POSITION_LABELS[2]} />
          </div>
          <div className="board-row" role="row">
            <Square value={squares[3]} onClick={() => handleClick(3)} position={POSITION_LABELS[3]} />
            <Square value={squares[4]} onClick={() => handleClick(4)} position={POSITION_LABELS[4]} />
            <Square value={squares[5]} onClick={() => handleClick(5)} position={POSITION_LABELS[5]} />
          </div>
          <div className="board-row" role="row">
            <Square value={squares[6]} onClick={() => handleClick(6)} position={POSITION_LABELS[6]} />
            <Square value={squares[7]} onClick={() => handleClick(7)} position={POSITION_LABELS[7]} />
            <Square value={squares[8]} onClick={() => handleClick(8)} position={POSITION_LABELS[8]} />
          </div>
        </div>
        <button className="reset-button" onClick={handleReset}>
          Reset Game
        </button>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}