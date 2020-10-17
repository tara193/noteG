import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Login from "./containers/Login/Login";
import Notes from "./containers/Notes/Notes";
import AddNewNote from "./containers/Notes/AddNewNote";

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/notes" component={Notes} />
            <Route path="/add-notes" excat component={AddNewNote} />
          </Switch>
        </div>
    );
  }
}

export default App;
