/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from "react";
import { Board } from "./Board";
import axios from "axios";
import { Keyboard } from "./Keyboard";
import "./nerdle.css";
import "../../me/me.css";
export const Nerdle = () => {
  const [solution, setSolution] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [bad, setBad] = useState(false);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const solve = () => {
    console.log(solution)
    const shake = async () => {
      setBad(true);
      await new Promise((r) => setTimeout(r, 600));
      setBad(false);
    };
    if (solution.length !== 8) {
      shake();
      return;
    }
    setLoading(true);
    axios
      .post("https://em4lpay7od.execute-api.us-east-1.amazonaws.com/dev/nerdle", { solution })
      .then((res) => {
        console.log(solution)
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
      const valids = ["0", "1", "2", "3", "4", "5", "6", "7", "8","9", "-", "+", "x", "=", '*', '/']
      if (solution.length < 8 && key.length === 1 && valids.includes(key)) {
        if (key === 'x' || key === '*'.trim()){
          key = '*'
        }
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
    console.log(key)
    const specials = {
      go: "Enter",
      del: "Backspace",
    };
    if (key in specials) {
      key = specials[key];
    }
    handleKey(key);
  };

  return (
    <div id="wordle-app">
      <div className="center-container">
        <div id="wordle-nav">
          <i onClick={() => toggleModal("help")} className="wordle-icon far fa-2x fa-question-circle"></i>
          <span className="header">Nerdle Solver</span>
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
            <p>No statistics have been gathered because the Nerdle solution pool is not public.</p>
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
            <p>Choose a valid eight character equation with a single equals sign.</p>
            <h3>How it works:</h3>
            <p>
              Under Construction
            </p>
            <h3>Credits to:</h3>
            <p>
              The creators of  {" "}
              <a href="https://nerdlegame.com/" className="a bg-purple" target="_blank" rel="noreferrer">
               Nerdle
              </a>
            </p>
            <h3>Code:</h3>
            <a href="https://github.com/miles-moran/nerdle-solver" className="a bg-blue" target="_blank" rel="noreferrer">
              github
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
