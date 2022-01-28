import { Navigation } from "./Navigation";

export const Bio = () => {
  return (
    <div className="home">
      <Navigation />
      <h1 className="home-h1" style={{ fontSize: "4.5em", fontWeight: 500, marginBottom: 0 }}>
        Bio
      </h1>
      <div style={{ fontWeight: "400" }} target="_blank">
        Yes, I have a hotmail.
      </div>
    </div>
  );
};
