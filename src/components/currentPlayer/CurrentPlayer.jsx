import React from "react";
import { useSelector } from "react-redux";

const CurrentPlayer = () => {
  const gameStarted = useSelector(({ game }) => game.gameStarted);
  const currentPlayer = useSelector(({ game }) => game.currentPlayer);

  return (
    gameStarted && (
      <div>
        <h2>Game Started!</h2>
        <h3>Current Player: {currentPlayer.name}</h3>
      </div>
    )
  );
};

export default CurrentPlayer;
