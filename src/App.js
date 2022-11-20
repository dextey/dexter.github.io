import AboutMe from "./Components/AboutMe";
import Intro from "./Components/Intro";
import Projects from "./Components/Projects";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Intro />
        </Route>
        <Route path="/about">
          <div className="container mx-auto">
            <AboutMe />

            <Projects />
          </div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
