import logo from './logo.svg';
import './App.css';
import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./components/Home"
import Issues from "./components/Issues"
import IssueInfo from "./components/IssueInfo"
import NavBar from "./components/NavBar"
import NREQ from "./components/NREQ"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/issues/:org/:repo" component={Issues} />
          <Route path="/issueinfo/:org/:repo/:number" component={IssueInfo} />
          <Route path="/nreq/:title" component={NREQ} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
