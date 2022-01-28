import { Navigation } from "./Navigation";

export const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <h1 className="home-h1" style={{ fontSize: "4.5em", fontWeight: 500, marginBottom: 0 }}>
        Hola.
      </h1>
      <p style={{ fontWeight: 500, fontSize: "2.2em" }}>My name is Miles Moran.</p>
      <p className="home-p">
        I am a full-stack developer for{" "}
        <a href="https://www.karmacheck.com" className="a bg-blue" target="_blank" rel="noreferrer">
          KarmaCheck
        </a>
        .
      </p>
      <p className="home-p">I like solving puzzles.</p>
      <p className="home-p">I'm originally from St. Louis, Missouri, but I now find myself in Puerto Vallarta, Mexico. I can often be seen coding in coffee shops.</p>
      <div>
        <div className="nav">
          <a className="mr-05 bg-red a" target="_blank" href="mailto:miles-moran@hotmail.com" rel="noreferrer">
            email
          </a>
          <a className="mr-05 bg-red a" target="_blank" href="https://www.linkedin.com/in/miles-moran-71273716a/" rel="noreferrer">
            linkedin
          </a>
          <a href="https://www.github.com/miles-moran" target="_blank" className="mr-05 bg-red a" rel="noreferrer">
            github
          </a>
        </div>
      </div>
    </div>
  );
};
