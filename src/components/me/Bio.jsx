import { Navigation } from "./Navigation";

export const Bio = () => {
  return (
    <div className="home">
      <Navigation />
      <h1 className="home-h1" style={{ fontSize: "4.5em", fontWeight: 500, marginBottom: 0 }}>
        Bio
      </h1>
      <div className="home-p">
        <div style={{ fontWeight: "400" }} target="_blank">
          Under Construction
        </div>
        <div>Yes, I have hotmail.</div>
      </div>
    </div>
  );
};
