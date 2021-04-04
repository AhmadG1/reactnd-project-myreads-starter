import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Views/Home";
import Search from "./Views/Search";
import Source, { MyContext } from "./Source/";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Source>
          <Switch>
            <Route
              exact
              path={"/"}
              render={() => (
                <MyContext.Consumer>
                  {(context) => <Home {...context} />}
                </MyContext.Consumer>
              )}
            />
            <Route
              exact
              path={"/search"}
              render={() => (
                <MyContext.Consumer>
                  {(context) => <Search {...context} />}
                </MyContext.Consumer>
              )}
            />
          </Switch>
        </Source>
      </div>
    );
  }
}

export default BooksApp;
