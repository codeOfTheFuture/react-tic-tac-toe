import GameBoard from "./components/gameBoard/GameBoard";

function App() {
  return (
    <div
      className='App'
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Tic Tac Toe</h1>
      <GameBoard />
    </div>
  );
}

export default App;
