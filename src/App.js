import { Switch, Route } from "react-router-dom";
import Main from "./Containers/Main";
import Content from "./Containers/Content";
import Works from "./Containers/Works";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/about">
          <Content />
        </Route>
        <Route path="/works">
          <Works />
        </Route>
      </Switch>
    </>
  );
}

export default App;
