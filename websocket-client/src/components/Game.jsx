import { useGameSocket } from "../hooks/useGameSocket";
import { usePlayerControls } from "../hooks/usePlayerControls";
import Grid from "./Grid";
import Ranking from "./Ranking";

const GRID_SIZE = 10;

const Game = ({ playerName }) => {
  const { players, treasures, score, sendMessage } = useGameSocket(playerName);
  usePlayerControls(playerName, sendMessage);

  return (
    <div style={{ display: "flex", gap: "2rem", padding: "1rem" }}>
      <div>
        <h2>{playerName} | Pontos: {score}</h2>
        <Grid gridSize={GRID_SIZE} players={players} treasures={treasures} />
      </div>
      <Ranking players={players} playerName={playerName} />
    </div>
  );
};

export default Game;
