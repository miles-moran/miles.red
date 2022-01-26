import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Wordle } from "./components/Wordle";

const App = () => {
  useEffect(() => {
    document.title = 'Miles Moran'
  }, []);
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
