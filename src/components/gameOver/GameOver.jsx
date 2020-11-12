import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const GameOver = () => {
  const gameOver = useSelector(({ game }) => game.gameOver);

  return (
    gameOver && (
      <div data-test='component-game-over'>
        <h3>Game Over</h3>
        <button>New Game</button>
      </div>
    )
  );
};

export default GameOver;
