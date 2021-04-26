import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import Tasks from "@components/Tasks";
import Header from "@components/Header";
import Hallo from "@components/Hallo";


import '@shared/global.scss';

const App = () => {
  return (
    <Router>
        <Header />
        <Switch>
          <Route path="/:name">
            <Hallo />
          </Route>
          <Route path="/hallo">
            <div>
              <h1>Hallo</h1>
            </div>
          </Route>
          <Route path="/">
            <Tasks />
          </Route>
        </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));