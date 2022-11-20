import { Switch, Route } from "react-router-dom";
import Main from "./Containers/Main";
import Content from "./Containers/Content";

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
      </Switch>
    </>
  );
}

export default App;
