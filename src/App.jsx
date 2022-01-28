import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/me/Home";
import { Projects } from "./components/me/Projects";
import { Wordle } from "./components/projects/wordle/Wordle";
import "./components/me/me.css"

const App = () => {
  return (
    <Router>
    <Routes> 
      <Route path={"/"} element={<Home />} />
      <Route path={"/projects"} element={<Projects/>} />
      <Route path={"/projects/wordle"} element={<Wordle/>} />
    </Routes>
  </Router>
  );
}

export default App;
