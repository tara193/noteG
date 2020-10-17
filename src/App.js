import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Login from "./containers/Login/Login";
import Notes from "./containers/Notes/Notes";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/"> Login </Link>
          <Link to="/notes"> Notes</Link>
        </div>
        <div>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/notes" exact component={Notes} />
            {/* <Route path="/notes/:id" component={EditNoteContainer} /> */}
            {/* <Route path="/note" exact component={NewNote} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
