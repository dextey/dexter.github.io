import AboutMe from "./Components/AboutMe";
import Intro from "./Components/Intro";
import Skill from "./Components/Skill";
import Projects from "./Components/Projects";
import { Switch, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="mail flex justify-center items-center rounded-full hover:bg-pink-100 bg-yellow-300">
        <a href="mailto:dexterdevmode@gmail.com">
          <img src="mail.png" alt="mail" />
        </a>
      </div>
      <Switch>
        <Route exact path="/">
          <Intro />
        </Route>
        <Route path="/about">
          <AboutMe />
        </Route>
        <Route path="/skills">
          <Skill />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </>
  );
}

export default App;
