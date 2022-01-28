import { useState, useEffect, useCallback } from "react";
import { Board } from "./Board";
import axios from "axios";
import { Keyboard } from "./Keyboard";
import "./wordle.css";
export const Wordle = () => {
  const [solution, setSolution] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [bad, setBad] = useState(false);
  const [modal, setModal] = useState(false);
  

  const solve = () => {
    const shake = async () => {
      setBad(true);
      await new Promise((r) => setTimeout(r, 600));
      setBad(false);
    };
    if (solution.length !== 5) {
      shake();
      return;
    }
    axios
      .post("https://em4lpay7od.execute-api.us-east-1.amazonaws.com/dev/solve", { solution })
      .then((res) => {
        console.log(res);
        const attempts = res.data.attempts;

        setAttempts(attempts);
      })
      .catch(() => shake());
  };

  const handleKeyDown = useCallback(
    (event) => {
      const { key } = event;
      handleKey(key);
    },
    [solution]
  );

  const toggleModal = (newModal) => {
    if (modal === newModal) {
      setModal(null);
    } else {
      setModal(newModal);
    }
  };

  const handleKey = useCallback(
    (key) => {
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
  }, [handleKeyDown, handleKey]);

  const handleKeyboard = (key) => {
    const specials = {
      go: "Enter",
      del: "Backspace",
    };
    if (key in specials) {
      key = specials[key];
    }
    handleKey(key);
  };

  const distibution = {
    1: 1,
    2: 72,
    3: 876,
    4: 1021 - 30,
    5: 282,
    6: 53,
    7: 8,
    8: 3,
  };

  const getBarStyles = (d) => {
    const width = `${((distibution[d] + 30) / 1021) * 100}%`;
    let backgroundColor;
    if (d > 6) {
      backgroundColor = "#f5793a";
    }

    return {
      width,
      backgroundColor,
    };
  };

  return (
    <div id="wordle-app">
      <div className="center-container">
        <div id="wordle-nav">
          <i onClick={() => toggleModal("help")} className="wordle-icon far fa-2x fa-question-circle"></i>
          <span className="header">Wordle Solver</span>
          <i onClick={() => toggleModal("data")} className="wordle-icon fas fa-2x fa-chart-bar"></i>
        </div>
      </div>

      <Board solution={solution} attempts={attempts} bad={bad} />
      <Keyboard handleKeyboard={handleKeyboard} />
      {modal === "data" && (
        <div className="modal">
          <div className="modal-content">
            <div>
              <i onClick={() => toggleModal(null)} style={{ float: "right" }} className="fas wordle-icon fa-lg fa-times"></i>
            </div>
            <h3>Guess Distribution</h3>
            <p>Taken from the original Wordle pool of 2135.</p>
            <div>
              {Object.keys(distibution).map((d) => (
                <div key={d} className="graph-container">
                  <div className="guess">{d}</div>
                  <div className="graph">
                    <div className="graph-bar" style={getBarStyles(d)}>
                      <div className="num-guesses">{distibution[d]}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
            {modal === "help" && (
        <div className="modal">
          <div className="modal-content">
            <div>
              <i onClick={() => toggleModal(null)} style={{ float: "right" }} className="fas wordle-icon fa-lg fa-times"></i>
            </div>
            <h3>Here's how it works:</h3>
            <p>Under construction...</p>
              
          </div>
        </div>
        
      )}
    </div>
  );
};
