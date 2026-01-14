import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="player-one" symbol="X"/>
          <Player initialName="player-two" symbol="O"/>
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
