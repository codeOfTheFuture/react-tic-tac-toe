import GameBoard from "./components/gameBoard/GameBoard";
import PlayerForm from "./components/playerForm/PlayerForm";
import CurrentPlayer from "./components/currentPlayer/CurrentPlayer";
import GameOver from "./components/gameOver/GameOver";

import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <h1>Tic Tac Toe</h1>
      <PlayerForm />
      <CurrentPlayer />
      <GameOver />
      <GameBoard />
    </div>
  );
};

export default App;
