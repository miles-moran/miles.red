import { useState, useEffect, useCallback } from "react"; 
import { Board } from "./Board";
import axios from "axios";
export const Wordle = () => {
    const [solution, setSolution] = useState('')
    const [attempts, setAttempts] = useState([])
  
    const handleKeyDown = useCallback(event => {
      const solve = () => {
        if (solution.length!== 5){
          return
        }
        axios.post('https://em4lpay7od.execute-api.us-east-1.amazonaws.com/dev/solve', {solution}).then(res => {
        console.log(res.data.attempts)
        setAttempts(res.data.attempts)
         
        })
      }
      const { key } = event;
        if (solution.length < 5 && key.length === 1 && key.match(/[a-z]/i)){
          setSolution(prev => `${prev}${key}`)
        }
        if (key === 'Backspace'){
          setSolution(prev => prev.slice(0, -1))
        }
        if (key === 'Enter'){
          solve()
        }
        if (key === 'Escape'){
          setSolution('')
        }
        console.log(key)
  }, [solution]);

    useEffect(() => {
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      }
    }, [handleKeyDown]);
  
  

    
    return (
      <div>
        <div className="header">Wordle Solver</div>
        <Board solution={solution} attempts={attempts}/>
        {attempts.map(a => 
        <div>
          <div>{a.possibles.length}</div>
          </div>)}
      </div>
    );
  }
  