export default function GameOver({ winner, restart, playerName }) {
  return (
    <div id="game-over">
      <h2>Game over!</h2>
      {winner && <p>you won {playerName}!</p>}
      {!winner && <p>it's a draw</p>}
      <button onClick={restart}>rematch</button>
    </div>
  );
}
