const Ranking = ({ players, playerName }) => {
  return (
    <div>
      <h3>Ranking</h3>
      <ol>
        {Object.entries(players)
          .sort(([, a], [, b]) => b.score - a.score)
          .map(([name, player]) => {
            const isCurrent = name === playerName;
            return (
              <li
                key={name}
                style={{
                  color: player.color,
                  fontWeight: isCurrent ? "bold" : "normal",
                  textDecoration: isCurrent ? "underline" : "none",
                  backgroundColor: isCurrent ? "#eee" : "transparent",
                  padding: "2px 6px",
                  borderRadius: "4px",
                  marginBottom: "4px",
                }}
              >
                {name} - {player.score}
              </li>
            );
          })}
      </ol>
    </div>
  );
};

export default Ranking;
