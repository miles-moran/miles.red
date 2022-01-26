export const Board = ({solution, attempts}) => {
    const styles = {
        'green': '#6aaa64',
        'yellow': '#c9b458',
        'gray': '#787c7e',
        'o': 'black'
    }  
    return (
        <div className="board-container">
          <div className="board">
            <div className='row'>
          {solution !== undefined && [0, 1, 2, 3, 4].map((i) => <span key={`${i}`} className={solution.length > i ? 'tile blank occupied pop' : 'tile blank vacant'} style={{backgroundColor: "#fffff"}}>
          {solution.length > i && solution[i]}
            </span>)}
            </div>
          {attempts.map((attempt, a) => <div className='row' key={`guess-${a}`}>
            {attempt.colors.map((color, l) => <span className='tile' style={{backgroundColor: styles[color]}} key={`guess-${a}-${l}`}>
              {attempt.guess[l]}
            </span>)}
          </div>)}
        </div>
        </div>
    );
  }
  