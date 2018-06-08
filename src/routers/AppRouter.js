import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

/*Components*/
import Home from '../screens/Home';
import AddWidget from '../screens/AddWidget';
import Charts from '../screens/Charts';
import History from '../screens/History';
import People from '../screens/People';
import Group from '../screens/Group';
import Header from '../screens/Header';
import LeftBar from '../screens/LeftBar';
import RightBar from '../screens/RightBar';
import ProjectStatus from "../screens/gorfo/index";
import ProjectInfo1 from "../screens/ProjectInfo_1";
import ProjectInfo2 from "../screens/ProjectInfo_2";
import ProjectInfo3 from "../screens/ProjectInfo_3";
import ProjectInfo4 from "../screens/ProjectInfo_4";


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
            <Route path="/group/:id" component={Group}/>
            <Route path="/add-widget" component={AddWidget}/>
            <Route path="/history" component={ProjectStatus}/>
            <Route path="/projectinfo1" component={ProjectInfo1}/>
            <Route path="/projectinfo2" component={ProjectInfo2}/>
            <Route path="/projectinfo3" component={ProjectInfo3}/>
            <Route path="/projectinfo4" component={ProjectInfo4}/>
          </Switch>
          <RightBar />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
