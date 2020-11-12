import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPlayer } from "../../actions";

import { boardSquare, notSelected, selected } from "./BoardSquare.module.css";

const BoardSquare = () => {
  const players = useSelector(({ players }) => players);
  const currentPlayer = useSelector(({ game }) => game.currentPlayer);

  const dispatch = useDispatch();

  const [boardSquareSelected, setBoardSquareSelected] = useState(false);
  const [playerSymbol, setPlayerSymbol] = useState("");

  const selectBoardSquare = () => {
    if (boardSquareSelected === false) {
      setBoardSquareSelected(true);
      setPlayerSymbol(currentPlayer.symbol);
    }

    if (currentPlayer.symbol === "X") {
      dispatch(setCurrentPlayer(players.player2));
    }
    if (currentPlayer.symbol === "O") {
      dispatch(setCurrentPlayer(players.player1));
    }
  };

  return (
    <div
      className={boardSquare}
      data-test='component-board-square'
      onClick={selectBoardSquare}
    >
      <div className={boardSquareSelected ? selected : notSelected}>
        {playerSymbol}
      </div>
    </div>
  );
};

export default BoardSquare;
