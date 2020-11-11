import React, { useState } from "react";

import { boardSquare, notSelected, selected } from "./BoardSquare.module.css";

const BoardSquare = () => {
  const [boardSquareSelected, setBoardSquareSelected] = useState(false);

  const selectBoardSquare = () => {
    if (boardSquareSelected === false) {
      setBoardSquareSelected(true);
    }
  };

  return (
    <div
      className={boardSquare}
      data-test='component-board-square'
      onClick={selectBoardSquare}
    >
      <div className={boardSquareSelected ? selected : notSelected}>X</div>
    </div>
  );
};

export default BoardSquare;
