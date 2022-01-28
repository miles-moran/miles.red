import { Navigation } from "./Navigation";

export const Projects = () => {
  return (
    <div className="home">
      <Navigation/>
      <h1 className="home-h1" style={{ fontSize: "4.5em", fontWeight: 500, marginBottom: 0 }}>
        Projects
      </h1>
      <div className="home-p">
        <div style={{ fontWeight: "400" }} target="_blank">
          Wordle Solver
        </div>
        <div>
          Solves {" "}
          <a href="https://www.powerlanguage.co.uk/wordle/" className="bg-purple a" target="_blank" rel="noreferrer">
            Wordle
          </a>{" "}
          puzzles.
        </div>
        <a className="a bg-orange" href="/projects/wordle" target="_blank">
          app
        </a>{" "}
        <a className="a bg-blue" href="https://github.com/miles-moran/wordle-solver" target="_blank" rel="noreferrer">
          git
        </a>
      </div>
      <div className="home-p">
        <div style={{ fontWeight: "400" }} target="_blank">
          Codenamer
        </div>
        <div>
          Generates clues for the boardgame{" "}
          <a className="a bg-purple" href="https://en.wikipedia.org/wiki/Codenames_(board_game)" target="_blank" rel="noreferrer">
            Codenames
          </a>
          .
        </div>
        <a className="a bg-orange" href="https://www.codenamer.com" target="_blank" rel="noreferrer">
          app
        </a>{" "}
        <a className="a bg-blue" href="/projects/wordle" target="_blank">
          git
        </a>
      </div>
    </div>
  );
};
