export const Projects = () => {
  return (
    <div className="home">
      <h1 className="home-h1" style={{ fontSize: "4.5em", fontWeight: 500, marginBottom: 0 }}>
        Projects
      </h1>
      <div className="home-p">
        <div style={{ fontWeight: "400" }} target="_blank">
          Wordle Solver
        </div>
        <div>Solves wordle puzzles.</div>
        <a className="a-git" href="/projects/wordle" target="_blank">
          app
        </a>{" "}
        <a className="a-app" href="https://github.com/miles-moran/wordle-solver" target="_blank" rel="noreferrer">
          git
        </a>
      </div>
      <div className="home-p">
        <div style={{ fontWeight: "400" }} target="_blank">
          Codenamer
        </div>
        <div>
          Generates clues for the boardgame{" "}
          <a className="a-home italics" href="https://en.wikipedia.org/wiki/Codenames_(board_game)" target="_blank" rel="noreferrer">
            Codenames
          </a>
          .
        </div>
        <a className="a-git" href="https://www.codenamer.com" target="_blank" rel="noreferrer">
          app
        </a>{" "}
        <a className="a-app" href="/projects/wordle" target="_blank">
          git
        </a>
      </div>
    </div>
  );
};
