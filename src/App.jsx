import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";
function deriveActivePlayer(gameTurn) {
  let currentPlayer = "X";
  if (gameTurn.length > 0 && gameTurn[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");
  let activePlayer = deriveActivePlayer(gameTurns);
  function handleSelectSquare(rowInd, colInd) {
    setGameTurns((prevTurn) => {
      let currentPlayer = deriveActivePlayer(prevTurn);
      const updatedTurns = [
        { square: { row: rowInd, col: colInd }, player: currentPlayer },
        ...prevTurn,
      ];
      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player-one"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="player-two"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
