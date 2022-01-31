export const Keyboard = ({ handleKeyboard }) => {
  const rows = [
    ["q", "w", " e", "r", "t", "y", "u", "i", "o", "p"],
    ["", "a", "s", "d", "f", "g", "h", "j", "k", "l", ""],
    ["go", "z", "x", "c", "v", "b", "n", "m", "del"],
  ];

  return (
    <div className="center-container">
      <div id="keyboard">
        {rows.map((row, i) => (
          <div key={i} className="key-row">
            {row.map((key, j) => (
              <div onClick={() => handleKeyboard(key)} key={j} className={key === "" ? "half" : key === 'go' || key === 'del' ? 'key special-key': 'key'}>
                {key}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
