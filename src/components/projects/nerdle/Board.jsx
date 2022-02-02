export const Board = ({ solution, attempts, bad, loading }) => {
  const styles = {
    green: "rgb(57 136 116)",
    yellow: "rgb(130 4 88)",
    gray: "rgb(22 24 3)",
    o: "black",
  };
  let blocks = attempts;
  if (loading) {
    blocks = [
      {
        colors: ["gray", "yellow", "green", "yellow", "gray", "yellow", "green", "gray"],
        guess: "loading.",
      },
    ];
  }

  return (
    <div className="center-container">
      <div id="board">
        <div className={bad ? "nerdle-row bad-guess" : "nerdle-row"}>
          {solution !== undefined &&
            [0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <span key={`${i}`} className={solution.length > i ? "tile blank occupied pop" : "tile blank vacant"} style={{ backgroundColor: "#fffff" }}>
                {solution.length > i && solution[i]}
              </span>
            ))}
        </div>
        {blocks.map((attempt, a) => (
          <div className="nerdle-row" key={`guess-${a}`}>
            {attempt.colors.map((color, l) => (
              <span className={loading ? `tile loading-${l}` : "tile"} style={{ backgroundColor: styles[color] }} key={`guess-${a}-${l}`}>
                {attempt.guess[l]}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
