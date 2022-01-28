/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from "react";
import { Board } from "./Board";
import axios from "axios";
import { Keyboard } from "./Keyboard";
import "./wordle.css";
import "../../me/me.css";
export const Wordle = () => {
  const [solution, setSolution] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [bad, setBad] = useState(false);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    axios
      .post("https://em4lpay7od.execute-api.us-east-1.amazonaws.com/dev/solve", { solution })
      .then((res) => {
        console.log(res);
        const attempts = res.data.attempts;
        setAttempts(attempts);
        setLoading(false);
      })
      .catch(() => {
        shake();
        setLoading(false);
      });
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

  const padder = 60;

  const distibution = {
    1: 0,
    2: 34,
    3: 631,
    4: 1291 - padder,
    5: 328,
    6: 27,
    7: 4,
  };

  const getBarStyles = (d) => {
    const width = `${((distibution[d] + padder) / 1291) * 100}%`;
    let backgroundColor;
    if (d > 6) {
      backgroundColor = "#f5793a";
    }
    if (d === attempts.length.toString()) {
      backgroundColor = "#6aaa64";
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

      <Board solution={solution} attempts={attempts} bad={bad} loading={loading} />
      <Keyboard handleKeyboard={handleKeyboard} />
      {modal === "data" && (
        <div className="modal">
          <div className="modal-content">
            <div>
              <i onClick={() => toggleModal(null)} style={{ float: "right" }} className="fas wordle-icon fa-lg fa-times"></i>
            </div>
            <h3>Statistics</h3>
            <p>Gathered from the original Wordle pool of 2135.</p>
            <h3>Average</h3>
            <p>3.7 turns</p>
            <h3>Guess Distribution</h3>
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
            <h3>Instructions:</h3>
            <p>Choose any five letter word (if the word does not exist, it will be added to the pool of solutions anyways). The script will try to solve the Wordle puzzle in as few attempts as possible.</p>
            <h3>How it works:</h3>
            <p>
              The script tries to come up with guesses that will elimate as many possible solutions as it can. While there are only 2,315 possible solutions, this app uses a pool of over 5,000 additional words for guesses. This script takes a conservative approach to the game and aims to solve in fewer
              than seven turns, rather than going for a high average score.
            </p>
            <h3>Credits to:</h3>
            <p>
              Power Language, creator of{" "}
              <a href="https://www.powerlanguage.co.uk/wordle/" className="a bg-purple" target="_blank" rel="noreferrer">
                Wordle
              </a>
            </p>
            <h3>Code:</h3>
            <a href="https://github.com/miles-moran/wordle-solver" className="a bg-blue" target="_blank" rel="noreferrer">
              github
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
