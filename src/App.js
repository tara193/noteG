import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Login from "./containers/Login/Login";
import EditNoteContainer from "./containers/Notes/EditNoteContainer";
import Notes from "./containers/Notes/NotesContainer";

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
            <Route path="/notes/:id" component={EditNoteContainer} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
