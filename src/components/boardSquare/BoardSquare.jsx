import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentPlayer,
  updateTotalMoves,
  updatePlayer,
  gameOver,
} from "../../actions";
import setPlayerMoves from "../../helpers/playerMoves";
import checkPlayerMoves from "../../helpers/checkPlayerMoves";

import { boardSquare, notSelected, selected } from "./BoardSquare.module.css";

const BoardSquare = ({ boardSquareNum }) => {
  const players = useSelector(({ players }) => players);
  const currentPlayer = useSelector(({ game }) => game.currentPlayer);
  const totalMoves = useSelector(({ game }) => game.totalMoves);
  const gameStarted = useSelector(({ game }) => game.gameStarted);
  const gameEnded = useSelector(({ game }) => game.gameOver);

  const dispatch = useDispatch();

  const [boardSquareSelected, setBoardSquareSelected] = useState(false);
  const [playerSymbol, setPlayerSymbol] = useState("");

  const selectBoardSquare = () => {
    if (gameStarted && !gameEnded) {
      if (boardSquareSelected === false) {
        setBoardSquareSelected(true);
        setPlayerSymbol(currentPlayer.symbol);

        let updatedPlayer;
        updatedPlayer = setPlayerMoves(currentPlayer, boardSquareNum);

        updatedPlayer = checkPlayerMoves(updatedPlayer);

        if (totalMoves + 1 === 9) {
          dispatch(gameOver());
        } else if (updatedPlayer.wonGame) {
          dispatch(gameOver());
        } else {
          dispatch(updateTotalMoves(totalMoves + 1));
          dispatch(updatePlayer(updatedPlayer));

          if (currentPlayer.symbol === "X") {
            dispatch(setCurrentPlayer(players.player2));
          }
          if (currentPlayer.symbol === "O") {
            dispatch(setCurrentPlayer(players.player1));
          }
        }
      }
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
