import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPlayer, updateTotalMoves, gameOver } from "../../actions";

import { boardSquare, notSelected, selected } from "./BoardSquare.module.css";

const BoardSquare = ({ boardSquareNum }) => {
  const players = useSelector(({ players }) => players);
  const currentPlayer = useSelector(({ game }) => game.currentPlayer);
  const totalMoves = useSelector(({ game }) => game.totalMoves);

  const dispatch = useDispatch();

  const [boardSquareSelected, setBoardSquareSelected] = useState(false);
  const [playerSymbol, setPlayerSymbol] = useState("");

  const selectBoardSquare = () => {
    if (boardSquareSelected === false) {
      setBoardSquareSelected(true);
      setPlayerSymbol(currentPlayer.symbol);

      if (totalMoves + 1 === 9) {
        dispatch(gameOver());
      } else {
        dispatch(updateTotalMoves(totalMoves + 1));
      }
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
