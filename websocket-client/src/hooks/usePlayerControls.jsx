import { useEffect } from "react";

export const usePlayerControls = (playerName, sendMessage) => {
  useEffect(() => {
    const handleKey = (e) => {
      const directions = {
        ArrowUp: "up",
        ArrowDown: "down",
        ArrowLeft: "left",
        ArrowRight: "right",
      };
      if (directions[e.key]) {
        sendMessage(JSON.stringify({ type: "move", playerName, direction: directions[e.key] }));
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [playerName, sendMessage]);
};
