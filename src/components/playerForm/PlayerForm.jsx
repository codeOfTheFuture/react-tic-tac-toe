import React from "react";

import {
  playerForm,
  playerInputs,
  formGroup,
  playerInput,
} from "./PlayerForm.module.css";

const PlayerForm = () => {
  return (
    <form className={playerForm} data-test='component-player-form'>
      <div className={playerInputs}>
        <div className={formGroup}>
          <label htmlFor='player-1'>Player 1</label>
          <input
            type='text'
            className={playerInput}
            name='player-1'
            placeholder='Player 1'
          />
        </div>
        <div className={formGroup}>
          <label htmlFor='player-2'>Player 2</label>
          <input
            type='text'
            className={playerInput}
            name='player-2'
            placeholder='Player 2'
          />
        </div>
      </div>
      <button type='submit'>Start Game</button>
    </form>
  );
};

export default PlayerForm;
