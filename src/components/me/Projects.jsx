import { Navigation } from "./Navigation";

export const Projects = () => {
  const projects = [
    {
      title: "Wordle Solver",
      description: (
        <div>
          Solves puzzles based on the internet phenomenon{" "}
          <a href="https://www.powerlanguage.co.uk/wordle/" className="bg-purple a" target="_blank" rel="noreferrer">
            Wordle
          </a>
          . <br/> Written in Rust and uses information theory to generate optimal guesses.
        </div>
      ),
      app: "/projects/wordle",
      git: "https://github.com/miles-moran/rustle-api",
    },
    {
      title: "Nerdle Solver",
      description: (
        <div>
          Solves{" "}
          <a href="https://nerdlegame.com/" className="bg-purple a" target="_blank" rel="noreferrer">
            Nerdle
          </a>{" "}
          puzzles.
        </div>
      ),
      app: "/projects/nerdle",
      git: "https://github.com/miles-moran/nerdle-solver",
    },
    {
      title: "Codenamer",
      description: (
        <div>
        Generates clues for the boardgame{" "}
        <a className="a bg-purple" href="https://en.wikipedia.org/wiki/Codenames_(board_game)" target="_blank" rel="noreferrer">
          Codenames
        </a>
        .
      </div>
      ),
      app: "http://www.codenamer.com",
      git: "https://github.com/miles-moran/codenamer",
    },
  ];
  return (
    <div className="home">
      <Navigation />
      <h1 className="home-h1" style={{ fontSize: "4.5em", fontWeight: 500, marginBottom: 0 }}>
        Projects
      </h1>
      {projects.map((project) => 
        <div className="home-p">
          <div style={{ fontWeight: "400" }} target="_blank">
            {project.title}
          </div>
          <div className="project-description">
            {project.description}
            <a className="a bg-orange" href={project.app} target="_blank" rel="noreferrer">
              app
            </a>{" "}
            <a className="a bg-blue" href={project.git} target="_blank" rel="noreferrer">
              git
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
