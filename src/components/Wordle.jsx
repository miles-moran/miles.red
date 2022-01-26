import { useState, useEffect, useCallback } from "react";
import { Board } from "./Board";
import axios from "axios";
export const Wordle = () => {
  const [solution, setSolution] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [bad, setBad] = useState(false);
  const handleKeyDown = useCallback(
    (event) => {
      const shake = async () => {
        setBad(true);
        await new Promise((r) => setTimeout(r, 600));
        setBad(false);
      };
      const solve = () => {
        if (solution.length !== 5) {
          shake();
          return;
        }
        axios
          .post("https://em4lpay7od.execute-api.us-east-1.amazonaws.com/dev/solve", { solution })
          .then((res) => {
            setAttempts(res.data.attempts);
          })
          .catch(() => shake());
      };
      const { key } = event;
      if (solution.length < 5 && key.length === 1 && key.match(/[a-z]/i)) {
        setSolution((prev) => `${prev}${key}`);
      }
      if (key === "Backspace") {
        setSolution((prev) => prev.slice(0, -1));
      }
      if (key === "Enter") {
        solve();
      }
      if (key === "Escape") {
        setSolution("");
      }
    },
    [solution]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div>
      <div className="header">Wordle Solver</div>
      <Board solution={solution} attempts={attempts} bad={bad} />
      {/* {attempts.map((a, i) => (
        <div key={i}>
          <div>{a.possibles.length}</div>
        </div>
      ))} */}
    </div>
  );
};
