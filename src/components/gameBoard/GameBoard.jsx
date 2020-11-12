import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import BoardSquare from "../boardSquare/BoardSquare";

import { gameBoard } from "./GameBoard.module.css";

const GameBoard = () => {
  const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className={gameBoard} data-test='component-game-board'>
      {board.map((boardSquareNum) => (
        <BoardSquare key={boardSquareNum} boardSquareNum={boardSquareNum} />
      ))}
    </div>
  );
};

export default GameBoard;
