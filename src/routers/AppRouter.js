import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

/*Components*/
import Home from '../screens/Home';
import Home2 from '../screens/Home2';
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
            <Route path="/charts" component={Home2}/>
            <Route path="/people" component={Home2}/>
            <Route path="/andamento" component={Home2}/>
            <Route path="/historico" component={ProjectStatus}/>
          </Switch>
          <RightBar />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
