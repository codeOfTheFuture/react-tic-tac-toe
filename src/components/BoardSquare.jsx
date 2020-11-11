import React from "react";

const BoardSquare = ({ boardSquareNum }) => {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        border: "1px solid black",
      }}
    >
      {boardSquareNum}
    </div>
  );
};

export default BoardSquare;
