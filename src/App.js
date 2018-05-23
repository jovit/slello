import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch> </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
