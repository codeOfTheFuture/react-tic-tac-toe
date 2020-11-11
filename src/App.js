import GameBoard from "./components/gameBoard/GameBoard";
import PlayerForm from "./components/playerForm/PlayerForm";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <h1>Tic Tac Toe</h1>
      <PlayerForm />
      <GameBoard />
    </div>
  );
}

export default App;
