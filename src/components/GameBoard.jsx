import React from "react";
import BoardSquare from "./BoardSquare";

const GameBoard = () => {
  const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div
      style={{
        width: "600px",
        height: "600px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
      }}
    >
      {board.map((boardSquareNum) => (
        <BoardSquare key={boardSquareNum} boardSquareNum={boardSquareNum} />
      ))}
    </div>
  );
};

export default GameBoard;
