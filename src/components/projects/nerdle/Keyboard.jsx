export const Keyboard = ({ handleKeyboard }) => {
  const rows = [
    ["1", '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['go', '+', '-', '*', '/', '=', 'del'],
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
