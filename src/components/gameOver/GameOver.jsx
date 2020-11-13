import React from "react";
import { useSelector } from "react-redux";

import { gameOverWrapper } from "./GameOver.module.css";

const GameOver = () => {
  const gameOver = useSelector(({ game }) => game.gameOver);
  const currentPlayer = useSelector(({ game }) => game.currentPlayer);

  return (
    gameOver && (
      <div data-test='component-game-over' className={gameOverWrapper}>
        <h2>Game Over</h2>
        {currentPlayer.wonGame ? (
          <h3>Congrats {currentPlayer.name}! You Won!</h3>
        ) : (
          <h3>Draw</h3>
        )}
      </div>
    )
  );
};

export default GameOver;
