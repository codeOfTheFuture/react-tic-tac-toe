import React from "react";
import { useSelector } from "react-redux";
import BoardSquare from "../boardSquare/BoardSquare";
import { gameBoard } from "./GameBoard.module.css";

const GameBoard = () => {
  const board = useSelector(({ game }) => game.gameBoard);

  return (
    <div className={gameBoard} data-test='component-game-board'>
      {board.map((boardSquareNum) => (
        <BoardSquare key={boardSquareNum} boardSquareNum={boardSquareNum} />
      ))}
    </div>
  );
};

export default GameBoard;
