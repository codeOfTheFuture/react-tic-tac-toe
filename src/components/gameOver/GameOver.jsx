import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const GameOver = () => {
  const gameOver = useSelector(({ game }) => game.gameOver);
  const currentPlayer = useSelector(({ game }) => game.currentPlayer);

  const congrats = <h4>Congrats {currentPlayer.name}! You Won</h4>;

  const draw = <h4>Draw</h4>;

  return (
    gameOver && (
      <div data-test='component-game-over'>
        <h3>Game Over</h3>
        {currentPlayer.wonGame ? congrats : draw}
        <button>New Game</button>
      </div>
    )
  );
};

export default GameOver;
