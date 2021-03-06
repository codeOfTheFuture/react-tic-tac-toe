import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPlayers, startGame, setCurrentPlayer } from "../../actions";
import {
  playerForm,
  playerInputs,
  formGroup,
  playerInput,
  btn,
} from "./PlayerForm.module.css";

const PlayerForm = () => {
  const [playerName1, setPlayerName1] = useState("");
  const [playerName2, setPlayerName2] = useState("");

  const gameStarted = useSelector(({ game }) => game.gameStarted);
  const player1 = useSelector(({ players }) => players.player1);
  const totalMoves = useSelector(({ game }) => game.totalMoves);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    player1.name = playerName1;
    dispatch(setPlayers(playerName1, playerName2));
    dispatch(setCurrentPlayer(player1));
    dispatch(startGame());

    setPlayerName1((state) => {
      state = "";
      return state;
    });
    setPlayerName2((state) => {
      state = "";
      return state;
    });
  };

  return (
    !gameStarted &&
    totalMoves === 0 && (
      <form
        className={playerForm}
        data-test='component-player-form'
        onSubmit={handleSubmit}
      >
        <div className={playerInputs}>
          <div className={formGroup}>
            <label htmlFor='player1'>Player 1</label>
            <input
              type='text'
              className={playerInput}
              name='player1'
              placeholder='Player 1'
              value={playerName1}
              onChange={(e) => setPlayerName1(e.target.value)}
              data-test='input'
            />
          </div>
          <div className={formGroup}>
            <label htmlFor='player2'>Player 2</label>
            <input
              type='text'
              className={playerInput}
              name='player2'
              placeholder='Player 2'
              value={playerName2}
              onChange={(e) => setPlayerName2(e.target.value)}
              data-test='input'
            />
          </div>
        </div>
        <button type='submit' data-test='start-game' className={btn}>
          Start Game
        </button>
      </form>
    )
  );
};

export default PlayerForm;
