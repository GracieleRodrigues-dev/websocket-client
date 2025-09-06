// src/App.jsx
import { useState } from "react";
import Game from "./components/Game";

const App = () => {
  const [playerName, setPlayerName] = useState("");

  if (!playerName) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Caça ao Tesouro</h1>
        <input
          placeholder="Digite seu nome"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          style={{ padding: "0.5rem", fontSize: "1rem", marginTop: "1rem" }}
        />
      </div>
    );
  }

  return <Game playerName={playerName} />;
};

export default App;
