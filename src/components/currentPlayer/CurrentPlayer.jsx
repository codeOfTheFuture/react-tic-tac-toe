import React from "react";
import { useSelector } from "react-redux";

import { currentPlayerWrapper } from "./CurrentPlayer.module.css";

const CurrentPlayer = () => {
  const gameStarted = useSelector(({ game }) => game.gameStarted);
  const currentPlayer = useSelector(({ game }) => game.currentPlayer);
  const totalMoves = useSelector(({ game }) => game.totalMoves);

  return (
    gameStarted &&
    totalMoves < 9 && (
      <div className={currentPlayerWrapper}>
        <h2>Game Started!</h2>
        <h3>Current Player: {currentPlayer.name}</h3>
      </div>
    )
  );
};

export default CurrentPlayer;
