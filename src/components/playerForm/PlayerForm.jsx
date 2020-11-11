import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionTypes } from "../../actions";

import {
  playerForm,
  playerInputs,
  formGroup,
  playerInput,
} from "./PlayerForm.module.css";

const PlayerForm = () => {
  const [playerName1, setPlayerName1] = useState("");
  const [playerName2, setPlayerName2] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const moves = {
      topRow: [],
      middleRow: [],
      bottomRow: [],
      leftColumn: [],
      middleColumn: [],
      rightColumn: [],
      leftDiagonal: [],
      rightDiagonal: [],
    };

    const player1 = {
      name: playerName1,
      symbol: "X",
      moves,
    };

    const player2 = {
      name: playerName2,
      symbol: "O",
      moves,
    };

    dispatch({ type: actionTypes.SET_PLAYERS, payload: { player1, player2 } });

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
          />
        </div>
      </div>
      <button type='submit'>Start Game</button>
    </form>
  );
};

export default PlayerForm;
