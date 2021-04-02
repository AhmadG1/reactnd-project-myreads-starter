import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Views/Home";
import Search from "./Views/Search";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path={"/"} component={Home} />
          <React exact path={"/search"} component={Search} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
