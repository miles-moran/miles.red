import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/me/Home";
import { Bio } from "./components/me/Bio";
import { Projects } from "./components/me/Projects";
import { Wordle } from "./components/projects/wordle/Wordle";
import "./components/me/me.css"
import { Nerdle } from "./components/projects/nerdle/Nerdle";

const App = () => {
  return (
    <Router>
    <Routes> 
      <Route path={"/"} element={<Home />} />
      <Route path={"/bio"} element={<Bio/>} />
      <Route path={"/projects"} element={<Projects/>} />
      <Route path={"/projects/wordle"} element={<Wordle/>} />
      <Route path={"/projects/nerdle"} element={<Nerdle/>} />
    </Routes>
  </Router>
  );
}

export default App;
