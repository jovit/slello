import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ProjectStatus from './screens/ProjectStatus';
import People from './screens/People';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route component={ProjectStatus} path="/status" />
            <Route component={People} path="/people" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
