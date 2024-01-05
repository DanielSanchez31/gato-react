import { Square } from "./Square.jsx";
export function WinnerModal({ winner, resetGame }) {
  const winnerText = winner == false ? "Empate" : "Ganó " + winner;

  if (winner == null) return null;
  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">{winner && <Square>{winner}</Square>}</header>

        <footer>
          <button onClick={resetGame}>Volver a jugar</button>
        </footer>
      </div>
    </section>
  );
}
