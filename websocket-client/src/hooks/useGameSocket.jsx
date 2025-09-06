import { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";

const SERVER_URL = "ws://localhost:4520";

export const useGameSocket = (playerName) => {
  const [players, setPlayers] = useState({});
  const [treasures, setTreasures] = useState([]);
  const [score, setScore] = useState(0);

  const { sendMessage, lastMessage } = useWebSocket(SERVER_URL, {
    onOpen: () => {
      sendMessage(JSON.stringify({ type: "join", playerName }));
    },
    shouldReconnect: () => true,
  });

  useEffect(() => {
    if (!lastMessage) return;

    const data = JSON.parse(lastMessage.data);
    if (data.type === "state") {
      setPlayers(data.players || {});
      setTreasures(data.treasures || []);
      setScore(data.players?.[playerName]?.score || 0);
    }
    if (data.type === "error") {
      alert(data.message);
    }
  }, [lastMessage, playerName]);

  return { players, treasures, score, sendMessage };
};
