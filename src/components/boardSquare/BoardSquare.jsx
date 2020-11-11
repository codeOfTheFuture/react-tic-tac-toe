import React from "react";

const BoardSquare = ({ boardSquareNum }) => {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        border: "1px solid black",
      }}
      data-test='component-board-square'
    >
      {boardSquareNum}
    </div>
  );
};

export default BoardSquare;
