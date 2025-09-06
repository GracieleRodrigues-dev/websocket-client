const Grid = ({ gridSize, players, treasures }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${gridSize}, 40px)`,
        gap: "1px",
      }}
    >
      {Array.from({ length: gridSize * gridSize }).map((_, idx) => {
        const x = idx % gridSize;
        const y = Math.floor(idx / gridSize);

        const playerHereEntry = Object.entries(players).find(
          ([, p]) => p && p.x === x && p.y === y
        );
        const treasureHere = treasures.find((t) => t.x === x && t.y === y);

        const bgColor = playerHereEntry
          ? playerHereEntry[1].color
          : treasureHere
          ? "gold"
          : "white";

        const textColor = playerHereEntry ? "white" : "black";

        const displayChar = playerHereEntry
          ? playerHereEntry[0][0].toUpperCase()
          : treasureHere
          ? "💎"
          : "";

        return (
          <div
            key={idx}
            style={{
              width: 40,
              height: 40,
              border: "1px solid #333",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: bgColor,
              color: textColor,
              fontWeight: "bold",
            }}
          >
            {displayChar}
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
