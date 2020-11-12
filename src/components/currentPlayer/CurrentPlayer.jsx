import React from "react";
import { useSelector } from "react-redux";

const CurrentPlayer = () => {
  const gameStarted = useSelector(({ game }) => game.gameStarted);

  return (
    gameStarted && (
      <div data-test='component-current-player'>
        <h3>
          Current Player:
          <span>Player1</span>
        </h3>
      </div>
    )
  );
};

export default CurrentPlayer;
