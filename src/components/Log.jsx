export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turns.row},${turns.col}`}>
          {turn.player} selected {turn.square.row} , {turn.square.col}
        </li>
      ))} 
    </ol>
  );
}
