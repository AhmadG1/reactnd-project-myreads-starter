import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Views/Home";
import Search from "./Views/Search";
import Provider, { MyContext } from "./Provider/";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Provider>
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
        </Provider>
      </div>
    );
  }
}

export default BooksApp;
