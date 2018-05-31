import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

/*Components*/
import Home from '../screens/Home';
import AddWidget from '../screens/AddWidget';
import Charts from '../screens/Charts';
import History from '../screens/History';
import People from '../screens/People';
import Header from '../screens/Header';
import LeftBar from '../screens/LeftBar';
import RightBar from '../screens/RightBar';
import ProjectStatus from "../screens/gorfo/index";



const AppRouter = () => {
  return (
    <BrowserRouter>
      <div class="container">
        <Header />
        <div id="browserRouterDiv">
          <LeftBar />
          <Switch>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/charts" component={Charts}/>
            <Route path="/people" component={People}/>
            <Route path="/add-widget" component={AddWidget}/>
            <Route path="/history" component={History}/>
          </Switch>
          <RightBar />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
