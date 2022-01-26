export const Projects = () => {
  return (
    <div className="home">
      <h1 className="home-h1" style={{ fontSize: "4.5em", fontWeight: 500, marginBottom: 0 }}>
        Projects
      </h1>
      <p className="home-p">
        <div style={{ fontWeight: "400" }} target="_blank">
          Wordle Solver
        </div>
        <div>Solves wordle puzzles.</div>
        <a className='a-git' href="/projects/wordle" target="_blank">
          app
        </a>{" "}
        <a className='a-app' href="/projects/wordle" target="_blank">
          git
        </a>
      </p>
    </div>
  );
};
